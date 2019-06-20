package tomysql

import (
	"weexdemogo/datastruct"
	"weexdemogo/model"
	"io/ioutil"
	"encoding/json"
	"fmt"
)

type JsonModule struct {
}

func NewJsonModule() *JsonModule {
	return &JsonModule{}
}

// 把所有的数据导入 mysql 数据库
func AllJsonToMysql() {

	v := datastruct.ResultAll{}


	//v := datastruct.Result{}
	jsb := NewJsonModule()
	jsb.Load("../tomysql/demo.json", &v)

	data := v.Data
	//data, ok := (v.Data).([]datastruct.Module)
	//if !ok {
	//	fmt.Println("errrrrror")
	//	fmt.Println(len(data))
	//	fmt.Println(v.Data)
	//	return
	//}
	for i :=0; i<len(data); i++ {
		fmt.Println("-----------------------")
		module := data[i]
		events := module.Events
		module.Events = nil
		//fmt.Println(module)
		model.InsertModule(module)
		model.InsertEvents(events)
		for j:=0; j<len(events); j++ {

			//fmt.Println("++++++++++++++++++++++")
			fmt.Println(events[j])
		}
	}
	fmt.Println("finish!!!")
}

/*读取文件中的数据，赋值给 v*/
func (*JsonModule) Load(filename string, v interface{}) {
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