package model

import (
	"weexdemogo/datastruct"
	"fmt"
)

/*从数据库中查询事件*/
func SelectEvents(moduleId string) ([]datastruct.Event, datastruct.CsError) {
	datastruct.DB, _ = datastruct.GetDB()
	defer datastruct.DB.Close()

	//验证连接
	if err := datastruct.DB.Ping(); err != nil{
		fmt.Println("opon database fail")
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

	rows, err := tx.Query("select module_id, event_id," +
		"event_name," +
		"event_display_name," +
		"event_params_parse," +
		"event_params," +
		"is_enable," +
		"event_des" +
		" FROM WeexDemo.Events where module_id='" + moduleId + "' order by event_id;")
	if err != nil {
		return nil, &datastruct.CError{"sql error"}
	}

	points := make([]datastruct.Event,0,0)

	for rows.Next() {
		point := datastruct.Event{}
		rows.Scan(
			&point.ModuleId,
			&point.EventId,
			&point.EventName,
			&point.EventDisplayName,
			&point.EventParamsParse,
			&point.EventParams,
			&point.IsEnable,
			&point.EventDes)
		points = append(points, point)

	}
	fmt.Println("0000000000")
	return points, nil
}


// 向数据库中插入 Event
func InsertEvents(events []datastruct.Event) {

	datastruct.DB, _ = datastruct.GetDB()
	defer datastruct.DB.Close()

	//验证连接
	if err := datastruct.DB.Ping(); err != nil{
		fmt.Println("opon database fail")
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
		fmt.Println(err.Error())
		return
	}
	fmt.Println("start-insert")
	for i := 0; i<len(events); i++ {
		event := events[i]
		tx.Exec("INSERT INTO WeexDemo.Events(" +
			"module_id," +
			"event_id," +
			"event_name," +
			"event_display_name," +
			"event_params_parse," +
			"event_params" +
			",is_enable," +
			"event_des) " +
			"values(?,?,?,?,?,?,?,?)",
			event.ModuleId,
			event.EventId,
			event.EventName,
			event.EventDisplayName,
			event.EventParamsParse,
			event.EventParams,
			event.IsEnable,
			event.EventDes)
	}

	error := tx.Commit()
	if error != nil {
		fmt.Println(error.Error())
	}
}
