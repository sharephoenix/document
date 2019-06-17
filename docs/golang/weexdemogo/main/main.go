package main

import (
	_ "github.com/go-sql-driver/mysql"
	"weexdemogo/logic"
	_ "weexdemogo/datastruct"
	"fmt"
)

func main() {
	logic.Start()
}


func test() {
	fmt.Println("12312312312")
}
