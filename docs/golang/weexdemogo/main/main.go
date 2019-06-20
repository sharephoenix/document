package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	_ "weexdemogo/datastruct"
	"weexdemogo/logic"
)

func main() {
	//tojson.ConvertToFile()
	//tojson.ConvertEvent()
	logic.Start()
	//ConvertEvent()
	//tomysql.AllJsonToMysql()

	fmt.Println("above")
}

