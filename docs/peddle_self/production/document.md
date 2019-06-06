# 数据库表结构说明

## 用户

### 用户登录信息 表一：

| 字段 | 类型 | 说明
| :--- | --- | ---
| u_id | string | 用户ID
| password | string | 登录密码 md5 加密
| create_time | string | 用户创建时间 GMT:Datetime

### 用户简单信息 表二：

| 字段 | 类型 | 说明
| :--- | --- | ---
| u_id | string | 用户ID
| phone_number | string | 用户手机号码
| nickname | string | 用户昵称
| email | string | 用户邮箱

---

## 日志文档

### 文档分类 表一：

| 字段 | 类型 | 说明
| :--- | --- | ---
| type_id | string | 文档分类ID
| type_des | string | 文档分类说明
| create_time | string | 文档分类创建时间 GMT:Datetime

### 文档 表二：

| 字段 | 类型 | 说明
| :--- | --- | ---
| document_id| string | 文档 ID
| type_id | string | 文档类型
| title | string | 文档 标题
| subtitle | string | 文档副标题
| authorId | string | 作者的用户ID
| like_num | number | 喜欢支持的数量
| dislike_num | number | 不喜欢的数量
| share_num | number | 分享的数量
| create_time | string | 文档创建时间 GMT:Datetime

## 问题

### 问题分类 表一：

| 字段 | 类型 | 说明
| :--- | --- | ---
| issue_category_id | string | 问题类型分类
| issue_des | string | 问题类型描述

### 问题 表二：

| 字段 | 类型 | 说明
| :--- | --- | ---
| issue_id | string | 问题类型分类
| issue_category_id | string | 问题分类 ID
| issue | string | 问题
| answer | string | 答案，解决方法
| create_time | string | 文档创建时间 GMT:Datetime