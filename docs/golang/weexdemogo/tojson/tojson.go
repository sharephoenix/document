package tojson

import (
	"weexdemogo/model"
	"weexdemogo/datastruct"
	"encoding/json"
	"os"
	"fmt"
)

const TofilePath  = "./data"

/*把多有的 Modelue 导出到 json*/
func ConvertToFile() {
	a, error := model.SelectAllModule()
	if error == nil {
		a := datastruct.Response(200, "", a)
		buff, _ := json.Marshal(&a)
		json := string(buff)
		jsonToFile("./tojson/modules.json", json)
		fmt.Println()
	} else {
		fmt.Println(error.Error())
	}
}

/*将 module 中的事件，导出 json*/
func ConvertEvent() {
	m, err := model.SelectAllModule()
	if err == nil {
		for i := 0; i<len(m); i++ {
			ev := m[i]
			convertEventsToFile(ev.ModuleId)
		}
	}
}

/**********************************************************************************/

// json 生成文本
func jsonToFile(fileName string, jsonString string) {
	f,err := os.Create(fileName)
	defer f.Close()
	if err !=nil {
		fmt.Println(err.Error())
	} else {
		_,err=f.Write([]byte(jsonString))
		fmt.Println(err)
	}
}

/*将事件转化为 json file*/
func convertEventsToFile(moduleId string) {
	a, err := model.SelectEvents(moduleId)
	if err == nil {
		a := datastruct.Response(200, "", a)
		buff, _ := json.Marshal(&a)
		json := string(buff)
		jsonToFile(TofilePath + "/" + moduleId + ".json", json)

	} else {
		fmt.Println(err.Error())
	}
}