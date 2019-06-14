# golang 的学习记录

## 关于 内存重排
[内存重排链接](https://mp.weixin.qq.com/s/jbGBBvMFHUKWBMnC4p7Rww)

## 读取本地json

```golang
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

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
	EventParamsParse string	`json:"event_params_parse"`
	EventParams string `json:"event_params"`
	IsEnable bool `json:"is_enable"`
	EventDes string `json:"event_des"`
}

func main() {

	v := Result{}
	jsb := NewJsonStruct()
	jsb.Load("./main/demo.json", &v)

	fmt.Println(v.Data[0].Events[0].EventDisplayName)
	fmt.Println("finish!!!")
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

```