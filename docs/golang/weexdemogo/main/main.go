package main

import (
	_ "github.com/go-sql-driver/mysql"
	"weexdemogo/tojson"
)

func main() {
	tojson.ConverDemoJson()
	//model.SelectAllModule()
	//e := datastruct.CError{"this is error"}
	//fmt.Println(e.Error())
	//s := datastruct.CError{"this is error"}
	//fmt.Println(s.Error())
}


