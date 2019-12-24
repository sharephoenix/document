# MongoDb

前提：

1. 进入 mongo docker
2. `mongo` 命令进入 mongo 的命令操作界面

## 基本操作

* 查看数据库命令

```mongo
dbs
```

* 创建数据库, 切换数据库，没有数据库时候创建数据库

```mongo
use DATABASE_NAME
```

* 删除数据库

```mongo
db.dropDatabase()
```

* 创建 collection, 类似 mysql 中的table

```mongo
db.createCollection("table_name")
```

* 向 collection 中插入数据

```mongo
db.table_name.insert({"name": "alex", "age": 12})
```

* 查看当前数据库中有哪些 collection

```mongo
show tables
show collections
```

* 删除 collection

```mongo
db.table_name.drop()
```

## 创建集合

```mongo
db.createCollection(name, options)
```

* name: 要创建的集合名称
* options: 可选参数, 指定有关内存大小及索引的选项

字段 | 类型 | 描述
--- | :---: | :---
capped | 布尔 |（可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。当该值为 true 时，必须指定 size 参数。
autoIndexId | 布尔 |（可选）如为 true，自动在 _id 字段创建索引。默认为 false。
size | 数值 |（可选）为固定集合指定一个最大值，以千字节计（KB）。如果 capped 为 true，也需要指定该字段。
max | 数值 | （可选）指定固定集合中包含文档的最大数量。

* 创建固定集合 mycol，整个集合空间大小 6142800 KB, 文档最大个数为 10000 个。

```mongo
db.createCollection("mycol", { capped : true, autoIndexId : true, size : 6142800, max : 10000 } )
```

## 插入文档

```MongoDb
db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})

db.col.find()
```

## 更新文档

```mongo
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

query : update的查询条件，类似sql update查询内where后面的。
update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
writeConcern :可选，抛出异常的级别。

* 更新命令-相同的数据每次只可以修改一条记录

```mongo
db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
```

* 更新命令修改多行

```mongo
db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}}, {multi: true})
```

* save() 传入替换已有的文档

document : 文档数据。
writeConcern :可选，抛出异常的级别。

```mongo
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
```

修改 _id = ObjectId("56064f89ade2f21f36b03136") 的数据

```mongo
db.col.find().pretty()
{
        "_id" : ObjectId("56064f89ade2f21f36b03136"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "Runoob",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "NoSQL"
        ],
        "likes" : 110
}
```

* 格式化查找 collection 中的数据

```mongo
db.col.find().pretty()
```

## 更多跟新示例

```mongo
更多实例
只更新第一条记录：

db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
全部更新：

db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
只添加第一条：

db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
全部添加进去:

db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
全部更新：

db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
只更新第一条记录：

db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```

## MongoDB 删除文档

* 删除所有符合条件的数据

```mongo
db.col.remove({"title":"MongoDB"})
```

* 删除一条符合条件的数据

```mongo
db.col.remove({"title":"MongoDB"}, 1)
```

* 删除所有数据

```mongo
db.col.remove({})
db.col.find().pretty()
```

## 查询文档

* query ：可选，使用查询操作符指定查询条件
* projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。

```mongo
db.collection.find(query, projection)
```

### where

```mongo
db.col.find({key1:value1, key2:value2}).pretty()
```

操作 | 格式 | 范例 | RDBMS中的类似语句
--- | --- | --- | ---
等于 | {key:value} | db.col.find({"by":"菜鸟教程"}).pretty() | where by = '菜鸟教程'
小于 | {key:{$lt:value}} | db.col.find({"likes":{$lt:50}}).pretty() | where likes < 50
小于或等于 | {key:{$lte:value}} | db.col.find({"likes":{$lte:50}}).pretty() | where likes <= 50
大于 | {key:{$gt:value}} | db.col.find({"likes":{$gt:50}}).pretty() | where likes > 50
大于或等于 | {key:{$gte:value}} | db.col.find({"likes":{$gte:50}}).pretty() | where likes >= 50
不等于 | {key:{$ne:value}} | db.col.find({"likes":{$ne:50}}).pretty() | where likes != 50

### where and

```mongo
db.col.find({key1:value1, key2:value2}).pretty()
db.col.find({"by":"菜鸟教程", "title":"MongoDB 教程"}).pretty()
```

### where or

```mongo
db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
db.col.find({$or:[{"by":"菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()
```

### where or and and

```mongo
db.col.find({"likes": {$gt:50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()
```

## $type 操作符号

* type 有很多类型； 1-Double, 2-string
* 其他判断 [type 操作符号](https://www.runoob.com/mongodb/mongodb-operators-type.html)

```mongo
db.col.find({"title" : {$type : 2}})
或
db.col.find({"title" : {$type : 'string'}})
```

## limit and skip

* limit: 限制查询数量
* skip: 跳过多少条数据

### limit

```MongoDb
db.col.find({},{"title":1,_id:0}).limit(2)
```

### skip

```mongo
db.col.find({},{"title":1,_id:0}).limit(1).skip(1)
```

## sort 排序

* 1 为升序
* -1 为降序

```mongo
db.COLLECTION_NAME.find().sort({KEY:1})
```

## 索引

* 目的：极大的提高查询效率。
* 原因：数据库可以根据索引，整理数据(排序、红黑树、B树、B+树 等)
* 以下将 col 表中的 title 升序排列，description 降序排列(复合索引)
* background:true, 在后台创建索引，防止创建索引的过程中，阻塞其他数据库操作，当然还有其他的参数
* [其他索引参数](https://www.runoob.com/mongodb/mongodb-indexing.html)

```mongo
 db.col.createIndex({"title":1,"description":-1}, {"background": true})
```

## 聚合

* MongoDB中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)。

```mongo
db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
```

* 现在我们通过以上集合计算每个作者所写的文章数，使用aggregate()计算结果如下：

```mongo
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id: ObjectId(7df78ad8902d)
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   _id: ObjectId(7df78ad8902e)
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
}

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
{
   "result" : [
      {
         "_id" : "runoob.com",
         "num_tutorial" : 2
      },
      {
         "_id" : "Neo4j",
         "num_tutorial" : 1
      }
   ],
   "ok" : 1
}
```

### 其他表达式

表达式 | 描述 | 实例
--- | --- | ---
$sum |计算总和。 | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])
$avg | 计算平均值 | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])
$min | 获取集合中所有文档对应值得最小值。 | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])
$max | 获取集合中所有文档对应值得最大值。 | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])
$push | 在结果文档中插入值到一个数组中。 | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])
$addToSet | 在结果文档中插入值到一个数组中，但不创建副本。 | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])
$first | 根据资源文档的排序获取第一个文档数据。 | db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])
$last | 根据资源文档的排序获取最后一个文档数据 | db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])
$match | 使用MongoDB的标准查询操作。 | --
$limit | 用来限制MongoDB聚合管道返回的文档数。 | --
$skip | 在聚合管道中跳过指定数量的文档，并返回余下的文档。 | --
$unwind | 将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。 | --
$group | 将集合中的文档分组，可用于统计结果。| --
$sort | 将输入文档排序后输出。| --
$geoNear | 输出接近某一地理位置的有序文档。| --

### aggregate、$match 代替 find()

```mongo
db.col.aggregate([{$match:{"age":{$gt:12}}}]).pretty()
```

### 查询数量

```mongo
db.module2.find().count()
```

## 通道(注意： 有待写更多的 demo)

管道在Unix和Linux中一般用于将当前命令的输出结果作为下一个命令的参数。
MongoDB的聚合管道将MongoDB文档在一个管道处理完毕后将结果传递给下一个管道处理。管道操作是可以重复的。
表达式：处理输入文档并输出。表达式是无状态的，只能用于计算当前聚合管道的文档，不能处理其它的文档。

$project：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。
$match：用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。
$limit：用来限制MongoDB聚合管道返回的文档数。
$skip：在聚合管道中跳过指定数量的文档，并返回余下的文档。
$unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。
$group：将集合中的文档分组，可用于统计结果。
$sort：将输入文档排序后输出。
$geoNear：输出接近某一地理位置的有序文档。

```mongo
db.article.aggregate(
    { $project : {
        title : 1 ,
        author : 1 ,
    }}
 );
```