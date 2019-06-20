package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	_ "weexdemogo/datastruct"
	"weexdemogo/tomysql"
)

func main() {
	//tojson.ConvertToFile()
	//tojson.ConvertEvent()
	// go logic.Start()
	//ConvertEvent()
	tomysql.AllJsonToMysql()

	fmt.Println("above")
}

