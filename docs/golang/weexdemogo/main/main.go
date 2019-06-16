package main

import (
	_ "github.com/go-sql-driver/mysql"
	"weexdemogo/logic"
	_ "weexdemogo/datastruct"
)

func main() {
	logic.Start()
}

