# mysql 问题

## sleep 过多

* 查看 sleep 数量
  
  ```sql
  show processlist;
  ```

* 相关配置, my.cnf

```
# Default Homebrew MySQL server config
[mysqld]
# Only allow connections from localhost
bind-address = 127.0.0.1
port = 3306
max_connections=30
wait_timeout=5

```

## 事务行数据查询

* 查询后记得 callback 或者 commit 否者连接不会断开
