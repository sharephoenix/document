# 用户相关 api

## 基本结构体

```go
type UserModel struct {
  NickName string `json:"nickName"`
  Mobile string `json:"mobile"`
  Email string `json:"email"`
  Age string `json:"age"`
  Address string `json:"address"`
  Avatar string `json:"avatar"`
}
```

## 手机登录

### 接口地址-login

> POST /login

### 请求参数

> {"mobile": "", "code":""}

### 响应体

```json
{
 "code": 0,
 "data": {
  "nickName": "",
  "mobile":"",
  "email":"",
  "age":12,
  "address":"",
  "avatar":""
 }
}
```

## 发送验证码

### 接口地址

> POST /sendCode

### 请求体

> {"mobile": ""}

### 响应体

```json
{
	"code": 0,
	"data": {
		"code": "" // mobile 手机验证码
	}
}
```

## 获取用户信息

### 接口地址

>POST /getUser

### 请求体

> {"mobile":""}

### 响应体

```json
{
	"code": 0,
	"data": {
   "nickName": "",
   "mobile":"",
   "email":"",
   "age":12,
   "address":"",
   "avatar":""
  }
}
```
