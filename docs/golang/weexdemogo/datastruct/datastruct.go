package datastruct

import (
	"database/sql"
	"strings"
	"fmt"
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

func init() {
	fmt.Println("starttttt")
	DB, _ = GetDB()
}

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

	DB.SetMaxOpenConns(5)
	//设置数据库最大连接数
	DB.SetConnMaxLifetime(10)
	//设置上数据库最大闲置连接数
	DB.SetMaxIdleConns(10)
	return DB, err
}

type Result struct {
	Code int		`json:"code"`
	Msg string		`json:"msg"`
	Data interface{} 	`json:"data"`
}

type ResultAll struct {
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
	ModuleName string `json:"module_name"`
	EventId string `json:"event_id"`
	EventName string`json:"event_name"`
	EventDisplayName string	`json:"event_display_name"`
	EventParamsParse bool	`json:"event_params_parse"`
	EventParams string `json:"event_params"`
	IsEnable bool `json:"is_enable"`
	EventDes string `json:"event_des"`
}

type CError struct {
	CsError string
}

type CsError interface {
	Error() string
}

func (e CError)Error() string {
	return e.CsError
}

// 返回模型的数据解构
func Response(code int, msg string, data interface{}) Result {
	result := Result{
		Code: code,
		Msg: msg,
		Data: data,
	}
	return result
}