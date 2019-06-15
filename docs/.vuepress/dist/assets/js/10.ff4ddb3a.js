(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{63:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/jbGBBvMFHUKWBMnC4p7Rww",target:"_blank",rel:"noopener noreferrer"}},[t._v("内存重排链接"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"golang-的学习记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#golang-的学习记录","aria-hidden":"true"}},[this._v("#")]),this._v(" golang 的学习记录")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"关于-内存重排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-内存重排","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 内存重排")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"工程结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工程结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 工程结构")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ol",[s("li",[t._v("model 表的查询，每张表都有一个文件")]),t._v(" "),s("li",[t._v("tojson 读取数据库中的数据，转化为 json 数据")]),t._v(" "),s("li",[t._v("tomysql 从 json 中读取数据，导数数据库")]),t._v(" "),s("li",[t._v("data 从数据库中读取数据的结果")]),t._v(" "),s("li",[t._v("logic 所有 api 的查询")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"读取本地json-并序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取本地json-并序列化","aria-hidden":"true"}},[this._v("#")]),this._v(" 读取本地json, 并序列化")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"io/ioutil"\n)\n\ntype Result struct {\n\tCode int\t\t`json:"code"`\n\tMsg string\t\t`json:"msg"`\n\tData []Module \t`json:"data"`\n}\n\ntype Module struct {\n\tModuleId\tstring\t\t`json:"module_id"`\n\tModuleName\tstring\t\t`json:"module_name"`\n\tModuleDisplayName string \t`json:"module_display_name"`\n\tModuleIndex string\t\t`json:"module_index"`\n\tEvents []Event `json:"events"`\n}\n\ntype Event struct {\n\tModuleId string `json:"module_id"`\n\tEventId string `json:"event_id"`\n\tEventName string`json:"event_name"`\n\tEventDisplayName string\t`json:"event_display_name"`\n\tEventParamsParse string\t`json:"event_params_parse"`\n\tEventParams string `json:"event_params"`\n\tIsEnable bool `json:"is_enable"`\n\tEventDes string `json:"event_des"`\n}\n\nfunc main() {\n\n\tv := Result{}\n\tjsb := NewJsonStruct()\n\tjsb.Load("./main/demo.json", &v)\n\n\tfmt.Println(v.Data[0].Events[0].EventDisplayName)\n\tfmt.Println("finish!!!")\n}\n\ntype JsonStruct struct {\n}\n\nfunc NewJsonStruct() *JsonStruct {\n\treturn &JsonStruct{}\n}\n\nfunc (jst *JsonStruct) Load(filename string, v interface{}) {\n\t//ReadFile函数会读取文件的全部内容，并将结果以[]byte类型返回\n\tdata, err := ioutil.ReadFile(filename)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn\n\t}\n\n\t//读取的数据为json格式，需要进行解码\n\terr = json.Unmarshal(data, v)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n}\n\n')])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"数据库建表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库建表","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库建表")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  module_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_display_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_index "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  module_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_display_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_params_parse "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_params "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  is_enable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_des "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("module_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])}],!1,null,null,null);n.default=e.exports}}]);