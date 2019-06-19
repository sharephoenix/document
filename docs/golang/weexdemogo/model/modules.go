package model

import (
	"weexdemogo/datastruct"
	"fmt"
)

// 从数据库中查询 Modules 返回 json 数据
func SelectAllModule() ([]datastruct.Module, error) {
	//datastruct.DB, _ = datastruct.GetDB()
	//defer datastruct.DB.Close()
	//验证连接
	fmt.Println("ping")
	if err := datastruct.DB.Ping(); err != nil{
		fmt.Println("opon database fail"  + err.Error())
		return nil, &datastruct.CError{"没有数据"}
	} else {
		fmt.Println("opon database success")
	}

	if datastruct.DB == nil {
		fmt.Println("db === nil")
		return nil, &datastruct.CError{"db === nil"}
	}

	tx, err := datastruct.DB.Begin()

	if err != nil {
		fmt.Println(err.Error())
		return nil, &datastruct.CError{"db begin error"}
	}

	rows, err := tx.Query("select module_id, module_name, module_display_name, module_index FROM WeexDemo.Modules order by module_id;")

	if err != nil {
		tx.Rollback()
		return nil, &datastruct.CError{"sql error"}
	}
	defer rows.Close()
	points := make([]datastruct.Module,0,0)

	for rows.Next() {
		point := datastruct.Module{}
		rows.Scan(&point.ModuleId, &point.ModuleName, &point.ModuleDisplayName, &point.ModuleIndex)
		points = append(points, point)
	}
	tx.Commit()
	return points, nil
}


// 向数据库中插入 Module
func  InsertModule(module datastruct.Module) {

	//datastruct.DB, _ = datastruct.GetDB()
	//defer datastruct.DB.Close()

	//验证连接
	if err := datastruct.DB.Ping(); err != nil{
		fmt.Println("opon database fail" + err.Error())
		return
	} else {
		fmt.Println("opon database success")
	}

	if datastruct.DB == nil {
		fmt.Println("db === nil")
		return
	}
	//Begin函数内部会去获取连接
	tx, err := datastruct.DB.Begin()
	if err != nil {
		tx.Rollback()
		fmt.Println(err.Error())
		return
	}
	defer tx.Commit()
	fmt.Println("start-insert")
	tx.Exec("INSERT INTO WeexDemo.Modules(module_id, module_name, module_display_name,module_index) " +
		"values(?,?,?,?)", module.ModuleId, module.ModuleName, module.ModuleDisplayName, module.ModuleIndex)
	error := tx.Commit()
	if error != nil {

		fmt.Println(error.Error())
	}
}

func SelectAllData() ([]datastruct.Module, error) {
 ms, err := SelectAllModule()
 if err != nil {
	 defer fmt.Println("SelectAllData_error_end")
 	return nil, err
 }

 for i:=0; i< len(ms); i++ {
 	moduleId := ms[i].ModuleId
 	events, error := SelectEvents(moduleId)
 	if error != nil {
		return nil, error
	}
	ms[i].Events = events
 }
 defer fmt.Println("SelectAllData_end")
 return ms, nil
}
