package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"weexdemogo/logic"
	_ "weexdemogo/datastruct"
	"fmt"
)

func main() {
	logic.Start()
	fmt.Println("above")
}


func test() {
	fmt.Println("12312312312")
}
