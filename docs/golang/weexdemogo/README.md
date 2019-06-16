# 后台管理 API

## 头部基本信息

* 其他信息在请求接口中定义

| 字段 | 类型 | 说明
| --- | --- | ---


## 返回数据结构

* 字段说明

| 字段 | 类型 | 说明
| --- | --- | ---
| code | int | 返回错误 code 码
| msg | string | 错误信息
| data | any | 返回请求数据，类型不定

```json
{
"code": -1,
"msg": "",
"data": null
}
```

## 获取所有信息

| reqType | path | headers | params | body 
| ---     | ---  | --- |    --- | ---
| GET | '/demo/all' | --- | ---   | --- 


## 获取所有模块信息

| reqType | path | headers | params | body 
| ---     | ---  | --- |    --- | ---
| GET | '/demo/module' | --- | ---   | --- 


## 获取某个 moduleId 下的所有事件

| reqType | path | headers | params | body 
| ---     | ---  | --- |    --- | ---
| GET | '/demo/events/:moduleId' | --- | ---   | --- 


## 服务器允许跨域访问

[链接](https://gocn.vip/article/529)