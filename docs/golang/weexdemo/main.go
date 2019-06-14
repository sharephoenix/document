package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
	"os"
)

//数据库配置
const (
	userNameT = "root"
	passwordT = "qwer1234"
	ipT = "127.0.0.1"
	portT = "3306"
	dbNameT = "WeexDemo"
)

//Db数据库连接池
var DB *sql.DB

/*获取数据库*/
func GetDB() (*sql.DB, error) {

	//构建连接："用户名:密码@tcp(IP:端口)/数据库?charset=utf8"
	path := strings.Join([]string{userNameT, ":", passwordT, "@tcp(",ipT, ":", portT, ")/", dbNameT, "?charset=utf8"}, "")
	fmt.Println(path)
	//打开数据库,前者是驱动名，所以要导入： _ "github.com/go-sql-driver/mysql"
	DB, err := sql.Open("mysql", path)
	if err != nil {
		fmt.Println(err.Error())
	}
	//设置数据库最大连接数
	DB.SetConnMaxLifetime(100)
	//设置上数据库最大闲置连接数
	DB.SetMaxIdleConns(100)
	return DB, err
}

type Result struct {
	Code int		`json:"code"`
	Msg string		`json:"msg"`
	Data []Module 	`json:"data"`
}

type Module struct {
	ModuleId	string		`json:"module_id"`
	ModuleName	string		`json:"module_name"`
	ModuleDisplayName string 	`json:"module_display_name"`
	ModuleIndex string		`json:"module_index"`
	Events []Event `json:"events"`
}

type Event struct {
	ModuleId string `json:"module_id"`
	EventId string `json:"event_id"`
	EventName string`json:"event_name"`
	EventDisplayName string	`json:"event_display_name"`
	EventParamsParse bool	`json:"event_params_parse"`
	EventParams string `json:"event_params"`
	IsEnable bool `json:"is_enable"`
	EventDes string `json:"event_des"`
}

type CError struct {
	error string
}

func (e *CError)Error() string {
	return e.error
}

func main() {
	m, err := SelectAllModule()
	if err == nil {
		for i := 0; i<len(m); i++ {
			ev := m[i]
			convertEventsToFile(ev.ModuleId)
		}
	}
	//jsonToFile()
}

// 返回模型的数据解构
func Response(code int, msg string, data []Module) Result {
	result := Result{
		Code: code,
		Msg: msg,
		Data: data,
	}
	return result
}

// json 生成文本
func jsonToFile(fileName string, jsonString string) {
	f,err := os.Create(fileName)
	defer f.Close()
	if err !=nil {
		fmt.Println(err.Error())
	} else {
		_,err=f.Write([]byte(jsonString))
		fmt.Println(err)
	}
}

// 把所有的数据导入 mysql 数据库
func AllJsonToMysql() {
	v := Result{}
	jsb := NewJsonStruct()
	jsb.Load("./main/demo.json", &v)

	data := v.Data

	for i :=0; i<len(data); i++ {
		fmt.Println("-----------------------")
		module := data[i]
		events := module.Events
		module.Events = nil
		//fmt.Println(module)
		InsertModule(module)
		InsertEvents(events)
		for j:=0; j<len(events); j++ {

			//fmt.Println("++++++++++++++++++++++")
			fmt.Println(events[j])
		}
	}
	fmt.Println("finish!!!")
}

func InsertEvents(events []Event) {

	DB, _ = GetDB()
	defer DB.Close()

	//验证连接
	if err := DB.Ping(); err != nil{
		fmt.Println("opon database fail")
		return
	} else {
		fmt.Println("opon database success")
	}

	if DB == nil {
		fmt.Println("db === nil")
		return
	}
	//Begin函数内部会去获取连接
	tx, err := DB.Begin()
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

func  InsertModule(module Module) {

	DB, _ = GetDB()
	defer DB.Close()

	//验证连接
	if err := DB.Ping(); err != nil{
		fmt.Println("opon database fail")
		return
	} else {
		fmt.Println("opon database success")
	}

	if DB == nil {
		fmt.Println("db === nil")
		return
	}
	//Begin函数内部会去获取连接
	tx, err := DB.Begin()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println("start-insert")
	tx.Exec("INSERT INTO WeexDemo.Modules(module_id, module_name, module_display_name,module_index) " +
		"values(?,?,?,?)", module.ModuleId, module.ModuleName, module.ModuleDisplayName, module.ModuleIndex)
	error := tx.Commit()
	if error != nil {
		fmt.Println(error.Error())
	}
}

type JsonStruct struct {
}

func NewJsonStruct() *JsonStruct {
	return &JsonStruct{}
}

func (jst *JsonStruct) Load(filename string, v interface{}) {
	//ReadFile函数会读取文件的全部内容，并将结果以[]byte类型返回
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	//读取的数据为json格式，需要进行解码
	err = json.Unmarshal(data, v)
	if err != nil {
		fmt.Println(err)
		return
	}
}

/*把多有的 Modelue 导出到 json*/
func convertToFile() {
	a, error := SelectAllModule()
	if error == nil {
		a := Response(200, "", a)
		buff, _ := json.Marshal(&a)
		json := string(buff)
		jsonToFile("./main/modules.json", json)
		fmt.Println()
	} else {
		fmt.Println(error.Error())
	}
}

// 查询 Modules 返回 json 数据
func SelectAllModule() ([]Module, error) {
	DB, _ = GetDB()
	defer DB.Close()

	//验证连接
	if err := DB.Ping(); err != nil{
		fmt.Println("opon database fail")
		return nil, &CError{"没有数据"}
	} else {
		fmt.Println("opon database success")
	}

	if DB == nil {
		fmt.Println("db === nil")
		return nil, &CError{"db === nil"}
	}

	tx, err := DB.Begin()
	if err != nil {
		fmt.Println(err.Error())
		return nil, &CError{"db begin error"}
	}

	rows, err := tx.Query("select module_id, module_name, module_display_name, module_index FROM WeexDemo.Modules order by module_id;")
	if err != nil {
		return nil, &CError{"sql error"}
	}

	points := make([]Module,0,0)

	for rows.Next() {
		point := Module{}
		rows.Scan(&point.ModuleId, &point.ModuleName, &point.ModuleDisplayName, &point.ModuleIndex)
		points = append(points, point)
	}

	return points, nil
}

/*将事件转化为 json file*/
func convertEventsToFile(moduleId string) {
	a, err := SelectEvents(moduleId)
	if err == nil {
		buff, _ := json.Marshal(&a)
		json := string(buff)
		jsonToFile("./main/" + moduleId + ".json", json)

	} else {
		fmt.Println(err.Error())
	}
}

func SelectEvents(moduleId string) ([]Event, error) {
	DB, _ = GetDB()
	defer DB.Close()

	//验证连接
	if err := DB.Ping(); err != nil{
		fmt.Println("opon database fail")
		return nil, &CError{"没有数据"}
	} else {
		fmt.Println("opon database success")
	}

	if DB == nil {
		fmt.Println("db === nil")
		return nil, &CError{"db === nil"}
	}

	tx, err := DB.Begin()
	if err != nil {
		fmt.Println(err.Error())
		return nil, &CError{"db begin error"}
	}

	rows, err := tx.Query("select module_id, event_id," +
			"event_name," +
				"event_display_name," +
		"event_params_parse," +
		"event_params," +
		"is_enable," +
		"event_des" +
			" FROM WeexDemo.Events order by event_id;")
	if err != nil {
		return nil, &CError{"sql error"}
	}

	points := make([]Event,0,0)

	for rows.Next() {
		point := Event{}
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

