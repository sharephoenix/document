# Redis 入门学习

[官网](http://redis.cn/)

## 前提

* 安装 Redis
* redis-cli 进入 redis 操作界面

## 支持哪些数据结构

字符串（strings）， 散列（hashes）， 列表（lists）， 集合（sets）， 有序集合（sorted sets） 与范围查询， bitmaps， hyperloglogs 和 地理空间（geospatial） 索引半径查询。 Redis 内置了 复制（replication），LUA脚本（Lua scripting）， LRU驱动事件（LRU eviction），事务（transactions） 和不同级别的 磁盘持久化（persistence）， 并通过 Redis哨兵（Sentinel）和自动 分区（Cluster）提供高可用性（high availability)

## 字符串（strings）

* 简单操作
  
 ```redis
 127.0.0.1:6379> set name alex
OK
127.0.0.1:6379> get name
"alex"
127.0.0.1:6379> exists name
(integer) 1
127.0.0.1:6379> del name
(integer) 1
127.0.0.1:6379> get name
(nil)
 ```

* 原子递增

```redis
  127.0.0.1:6379> set counter 1
OK
127.0.0.1:6379> get counter
"1"
127.0.0.1:6379> incr counter
(integer) 2
127.0.0.1:6379> get counter
"2"
127.0.0.1:6379>
```

* 原子递增 10

```redis
127.0.0.1:6379> incrby counter 10
(integer) 12
127.0.0.1:6379> get counter
"12"
127.0.0.1:6379> 
```

* mset mget 多次赋值，多次取值

```redis
127.0.0.1:6379> mset a 1 b 2 c 3
OK
127.0.0.1:6379> mget a b c
1) "1"
2) "2"
3) "3"
127.0.0.1:6379>
```

* 获取存储值的类型

```redis
127.0.0.1:6379> type a
string
127.0.0.1:6379> incr a
(integer) 2
127.0.0.1:6379> type a
string
127.0.0.1:6379>
```

* expire 设置超时，单位：秒

```redis
127.0.0.1:6379> set a 2
OK
127.0.0.1:6379> expire a 3
(integer) 1
127.0.0.1:6379> get a
(nil)
127.0.0.1:6379>
```

* expire 设置超时
  
```redis
127.0.0.1:6379> set a 100 ex 5
OK
127.0.0.1:6379> get a
"100"
127.0.0.1:6379> get a
(nil)
127.0.0.1:6379>
```

## Redis Lists

要说清楚列表数据类型，最好先讲一点儿理论背景，在信息技术界List这个词常常被使用不当。例如”Python Lists”就名不副实（名为Linked Lists），但他们实际上是数组（同样的数据类型在Ruby中叫数组）

一般意义上讲，列表就是有序元素的序列：10,20,1,2,3就是一个列表。但用数组实现的List和用Linked List实现的List，在属性方面大不相同。

Redis lists基于Linked Lists实现。这意味着即使在一个list中有数百万个元素，在头部或尾部添加一个元素的操作，其时间复杂度也是常数级别的。用LPUSH 命令在十个元素的list头部添加新元素，和在千万元素list头部添加新元素的速度相同。

那么，坏消息是什么？在数组实现的list中利用索引访问元素的速度极快，而同样的操作在linked list实现的list上没有那么快。

Redis Lists用linked list实现的原因是：对于数据库系统来说，至关重要的特性是：能非常快的在很大的列表上添加元素。另一个重要因素是，正如你将要看到的：Redis lists能在常数时间取得常数长度。

如果快速访问集合元素很重要，建议使用可排序集合(sorted sets)。可排序集合我们会随后介绍。

* lpush rpush lrange 添加 获取 命令

```redis
127.0.0.1:6379> rpush mylist a
(integer) 1
127.0.0.1:6379> rpush mylist b
(integer) 2
127.0.0.1:6379> lpush mylist first
(integer) 3
127.0.0.1:6379> lrange mylist 0 -1
1) "first"
2) "a"
3) "b"

127.0.0.1:6379> del mylist
(integer) 1
127.0.0.1:6379> lrange mylist 0 -1
(empty list or set)
127.0.0.1:6379> rpush mylist 1 2 3 4 5 "foo bar"
127.0.0.1:6379> lrange mylist 0 -1
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "foo bar"
```

* rpop lpop 取出 list 中的值

```redis
127.0.0.1:6379> lpop mylist
"1"
127.0.0.1:6379> rpop mylist
"foo bar"
127.0.0.1:6379> lrange mylist 0 -1
1) "2"
2) "3"
3) "4"
4) "5"
```

* 获取 list 的长度

```redis
127.0.0.1:6379> lrange mylist 0 -1
1) "2"
2) "3"
3) "4"
4) "5"
127.0.0.1:6379> llen mylist
(integer) 4
```

## list 阻塞操作

可以使用Redis来实现生产者和消费者模型，如使用LPUSH和RPOP来实现该功能。但会遇到这种情景：list是空，这时候消费者就需要轮询来获取数据，这样就会增加redis的访问压力、增加消费端的cpu时间，而很多访问都是无用的。为此redis提供了阻塞式访问 BRPOP 和 BLPOP 命令。 消费者可以在获取数据时指定如果数据不存在阻塞的时间，如果在时限内获得数据则立即返回，如果超时还没有数据则返回null, 0表示一直阻塞。
同时redis还会为所有阻塞的消费者以先后顺序排队。
如需了解详细信息请查看 RPOPLPUSH 和 BRPOPLPUSH。

## Redis Hashes

值得注意的是，小的 hash 被用特殊方式编码，非常节约内存。

* 简单操作: hset hget hgetall hmget

```redis
127.0.0.1:6379> hset myhash a 1 b 2 c 3
(integer) 0
127.0.0.1:6379> hget myhash a
"1"
127.0.0.1:6379> hgetall myhash
1) "a"
2) "1"
3) "b"
4) "2"
5) "c"
6) "3"
127.0.0.1:6379> hmget myhash a b
1) "1"
2) "2"
```

* hincrby

```redis
127.0.0.1:6379> hincrby myhash a 10
(integer) 11
127.0.0.1:6379> hget myhash a
"11"
```

## set

Redis Set 是 String 的无序排列。SADD 指令把新的元素添加到 set 中。对 set 也可做一些其他的操作，比如测试一个给定的元素是否存在，对不同 set 取交集，并集或差，等等。

* 简单操作

```redis
127.0.0.1:6379> sadd myset 1 2 34
(integer) 3
127.0.0.1:6379> smembers myset
1) "1"
2) "2"
3) "34"
```

* sismember 查看是否存在

```redis
27.0.0.1:6379> smembers myset
1) "1"
2) "2"
3) "34"
127.0.0.1:6379> sismember myset 1
(integer) 1
127.0.0.1:6379> sismember myset 34
(integer) 1
127.0.0.1:6379> sismember myset 340
(integer) 0
```

* 使用场景

Sets 适合用于表示对象间的关系。 例如，我们可以轻易使用 set 来表示标记。

一个简单的建模方式是，对每一个希望标记的对象使用 set。这个 set 包含和对象相关联的标签的 ID。

假设我们想要给新闻打上标签。 假设新闻 ID 1000 被打上了 1,2,5 和 77 四个标签，我们可以使用一个 set 把 tag ID 和新闻条目关联起来：

```redis
> sadd news:1000:tags 1 2 5 77
(integer) 4
```

或者

```redis
> sadd tag:1:news 1000
(integer) 1
> sadd tag:2:news 1000
(integer) 1
> sadd tag:5:news 1000
(integer) 1
> sadd tag:77:news 1000
(integer) 1
```

* sinter 取交集

```redis
127.0.0.1:6379> smembers myset
1) "1"
2) "2"
3) "34"
127.0.0.1:6379> sadd myset0 1 6 2 99
(integer) 4
127.0.0.1:6379> sinter myset myset0
1) "1"
2) "2"
```

* 并集

```redis
127.0.0.1:6379> sunionstore myset2 myset0 myset1
(integer) 5
127.0.0.1:6379> smembers myset2
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
127.0.0.1:6379> smembers myset0
1) "1"
2) "2"
3) "3"
127.0.0.1:6379> smembers myset1
1) "3"
2) "4"
3) "5"
```

## 时间线

* 简单使用

```redis
127.0.0.1:6379> zadd line0 0 "0000"
(integer) 0
127.0.0.1:6379> zadd line0 3 "33333"
(integer) 0
127.0.0.1:6379> zadd line0 4 "44444"
(integer) 0
127.0.0.1:6379> zrange line0 0 -1
1) "0000"
2) "33333"
3) "44444"
```

* 倒序获取

```redis
127.0.0.1:6379> zrevrange line0 0 -1
1) "44444"
2) "33333"
3) "0000"
```

* 获取值的同时获取权重

```redis
127.0.0.1:6379> zrange line0 0 -1 withscores
1) "0000"
2) "0"
3) "33333"
4) "3"
5) "44444"
6) "4"
```

* 过滤 score 权重; -inf 3: score<=3

```redis
127.0.0.1:6379> zrange line0 0 -1 withscores
1) "0000"
2) "0"
3) "33333"
4) "3"
5) "44444"
6) "4"
127.0.0.1:6379> zrangebyscore line0 -inf 3 withscores
1) "0000"
2) "0"
3) "33333"
4) "3"
```

* 移除 score [0, 3] 之间的数据; zremrangebyscore

```redis
127.0.0.1:6379> zremrangebyscore line0 0 3
(integer) 2
```

* 获取权重 score

```redis
127.0.0.1:6379> zrank line0 111
(integer) 0
127.0.0.1:6379> zrank line0 222
(integer) 1
127.0.0.1:6379> zrange line0 0 -1 withscores
1) "111"
2) "0"
3) "222"
4) "1"
```

* zadd 可以插入相同 scroe 的值

```redis
127.0.0.1:6379> zadd line0 0 123
(integer) 1
127.0.0.1:6379> zadd line0 0 456
(integer) 1
127.0.0.1:6379> zrange line0 0 -1 withscores
1) "123"
2) "0"
3) "456"
4) "0"
```

## pfadd

## pfcount
