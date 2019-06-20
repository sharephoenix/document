package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	_ "weexdemogo/datastruct"
	"weexdemogo/tojson"
)

func main() {
	//tojson.ConvertToFile()
	tojson.ConvertEvent()
	//logic.Start()

	//tomysql.AllJsonToMysql()

	fmt.Println("above")
}

