# 数据库表结构说明

## 用户

### 用户登录信息 表一：

| 字段 | 类型 | 说明
| :--- | --- | ---
| u_id | string | 用户ID
| password | string | 登录密码 md5 加密
| create_time | string | 用户创建时间 GMT

### 用户简单信息 表二：

| 字段 | 类型 | 说明
| :--- | --- | ---
| u_id | string | 用户ID
| nickname | string | 用户昵称
| email | string | 用户邮箱

---

## 文档

### 文档分类 表一：

| 字段 | 类型 | 说明
| :--- | --- | ---
| type_id | string | 文档分类ID
| type_des | string | 文档分类说明
| create_time | string | 文档分类创建时间 GMT

### 文档 表二：

| 字段 | 类型 | 说明
| :--- | --- | ---
| document_id| strin | 文档 ID
| type_id | string | 文档类型
| title | string | 文档 标题
| subtitle | string | 文档副标题
| authorId | string | 作者的用户ID
| create_time | string | 文档创建时间 GMT

