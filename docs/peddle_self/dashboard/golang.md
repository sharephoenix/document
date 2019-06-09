# 后台 golang

## 技术解构

1. Handler： api句柄
2. Logic： 数据逻辑，每个 Handler 对应一个数据逻辑
3. Model： 一个 model 对应数据库的一张表的 增删改查
4. xxx.sql：建表逻辑
5. api 使用 gin 网络框架
   
## Model

### 用户信息的增删改查