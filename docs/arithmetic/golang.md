# golang 算法进度

## 单链表关键字

1. 表头
2. 首节点
3. 尾节点

## 什么是单链表

单链表是一种链式存取的数据结构，用一组地址任意的存储单元存放线性表中的数据元素。链表中的数据是以结点来表示的，每个结点的构成：元素(数据元素的映象) + 指针(指示后继元素存储位置)，元素就是存储数据的存储单元，指针就是连接每个结点的地址数据。

## 单链表说明

1. 一个空的链表的长度是 0；只有首节点的链表长度是1；
2. 索引 index = 0, 指的是链表的首节点；
3. Insert index = 0, 指的是插入一个首节点；
4. Delete index = 0 | 1, 指的是 删除首节点； index = 2, 删除第二个节点；
5. ADD, 指的是插入新的尾节点；
6. GetLength, 指的是获取链表的长度，不包括，表头；
7. GetData index = 0, 获取首节点；
8. SearchIndex: 返回某个节点是 data
9. Search: 返回某个值得 Index

## 单链表

[外链接](https://segmentfault.com/a/1190000007442806)

```golang
package main

//链表实现
import (
    "fmt"
    "os"
)

//定义错误常量
const (
    ERROR = -1000000001
)

//定义元素类型
type Element int64

//定义节点
type LinkNode struct {
    Data Element   //数据域
    Nest *LinkNode //指针域，指向下一个节点
}

//函数接口
type LinkNoder interface {
    Add(head *LinkNode, new *LinkNode)              //后面添加
    Delete(head *LinkNode, index int)               //删除指定index位置元素
    Insert(head *LinkNode, index int, data Element) //在指定index位置插入元素
    GetLength(head *LinkNode) int                   //获取长度
    Search(head *LinkNode, data Element)            //查询元素的位置
    GetData(head *LinkNode, index int) Element      //获取指定index位置的元素
}

//添加 头结点，数据
func Add(head *LinkNode, data Element) {
    point := head //临时指针
    for point.Nest != nil {
        point = point.Nest //移位
    }
    var node LinkNode  //新节点
    point.Nest = &node //赋值
    node.Data = data

    head.Data = Element(GetLength(head)) //打印全部的数据

    if GetLength(head) > 1 {
        Traverse(head)
    }

}

//删除 头结点 index 位置
func Delete(head *LinkNode, index int) Element {
    //判断index合法性
    if index < 0 || index > GetLength(head) {
        fmt.Println("please check index")
        return ERROR
    } else {
        point := head
        for i := 0; i < index-1; i++ {
            point = point.Nest //移位
        }
        point.Nest = point.Nest.Nest //赋值
        data := point.Nest.Data
        return data
    }
}

//插入 头结点 index位置 data元素
func Insert(head *LinkNode, index int, data Element) {
    //检验index合法性
    if index < 0 || index > GetLength(head) {
        fmt.Println("please check index")
    } else {
        point := head
        for i := 0; i < index-1; i++ {
            point = point.Nest //移位
        }
        var node LinkNode //新节点，赋值
        node.Data = data
        node.Nest = point.Nest
        point.Nest = &node
    }
}

//获取长度 头结点
func GetLength(head *LinkNode) int {
    point := head
    var length int
    for point.Nest != nil {
        length++
        point = point.Nest
    }
    return length
}

//搜索 头结点 data元素
func Search(head *LinkNode, data Element) {
    point := head
    index := 0
    for point.Nest != nil {
        if point.Data == data {
            fmt.Println(data, "exist at", index, "th")
            break
        } else {
            index++
            point = point.Nest
            if index > GetLength(head)-1 {
                fmt.Println(data, "not exist at")
                break
            }
            continue
        }
    }
}

//获取data 头结点 index位置
func GetData(head *LinkNode, index int) Element {
    point := head
    if index < 0 || index > GetLength(head) {
        fmt.Println("please check index")
        return ERROR
    } else {
        for i := 0; i < index; i++ {
            point = point.Nest
        }
        return point.Data
    }
}

//遍历 头结点
func Traverse(head *LinkNode) {
    point := head.Nest
    for point.Nest != nil {
        fmt.Println(point.Data)
        point = point.Nest
    }
    fmt.Println("Traverse OK!")
}

//主函数测试
func main() {
    var head LinkNode = LinkNode{Data: 0, Nest: nil}
    head.Data = 0
    var nodeArray []Element
    for i := 0; i < 10; i++ {
        nodeArray = append(nodeArray, Element(i+1+i*100))
        Add(&head, nodeArray[i])

    }

    Delete(&head, 3)
    Search(&head, 2032)
    Insert(&head, 23, 10010)
    Traverse(&head)
    fmt.Println("data is", GetData(&head, 6))
    fmt.Println("length:", GetLength(&head))
    os.Exit(0)
}

```

## 双链表
[双链表 list](https://my.oschina.net/90design/blog/1813377)
```go

package main

import (
	"fmt"
)

type DNode struct {
	data interface{}
	prev *DNode
	next *DNode
}

type DList struct {
	size uint64
	head *DNode
	tail *DNode
}

func InitList() (list *DList) {
	alist := DList{}
	alist.size = 0
	alist.head = nil
	alist.tail = nil
	return &alist
}

func (list *DList)GetSize() uint64 {
	return list.size
}

func (list *DList)GetHead() *DNode {
	return (*list).head
}

func (list *DList)GetTail() *DNode {
	return (*list).tail
}

func (list *DList)Append(node interface{}) {
	newNode := &DNode{node, nil, nil}

	if (*list).GetSize() == 0 {
		(*list).head = newNode
		(*list).tail = newNode
	} else {
		newNode.prev = list.tail
		newNode.next = nil
		(*list).tail.next = newNode
		(*list).tail = newNode
	}
	(*list).size++
}

func (list *DList)SearchIndex(index uint64) *DNode {

	if index < list.GetSize(){
		node := (*list).GetHead()
		var i uint64
		i = 1
		for ; i < index; i++ {
			node = node.next
		}
		return node
	}
	return nil
}

func (list *DList)Delete(node *DNode) {
	currentNode := (*list).head

	for i := uint64(0); i < (*list).GetSize(); i++ {
		if currentNode == node {
			prev := currentNode.prev
			next := currentNode.next

			prev.next = next
			next.prev = prev
			fmt.Println("delete")
			(*list).size--
			break
		}
		currentNode = currentNode.next
	}
}

func (list *DList)PrintAll() {
	var i uint64
	i = 0
	currentNode := list.head
	for ; i < list.GetSize(); i ++ {
		fmt.Println(currentNode.data)
		currentNode = currentNode.next
	}
}


func main() {
	a := InitList()

	for i := 0; i < 100; i++ {
		a.Append(i)
	}
	node := a.SearchIndex(9)
	a.Delete(node)
	fmt.Println(a.GetSize())

}

```

## golang List

```golang
func ListOperation() {
	link := list2.New()
	link.PushBack(1)
	link.PushBack(0)
	link.PushFront(2)
	link.PushFront(3)
	link.PushFront(30)
	fmt.Println("root", link.Back().Value)
	// 遍历链表
	for p := link.Back(); p != link.Front(); p = p.Prev() {
		fmt.Println("Number", p.Value)
	}
}
```

## panic recover

```golang
func main() {
	defer func() {
		fmt.Println("c")
		if err := recover(); err != nil {
			fmt.Println(err)
		}

		fmt.Println("d")
	}()

	fmt.Println("a")
	panic("panic information")
	fmt.Println("b")
	fmt.Println("f")
}
```
* result
```js
a
c
panic information
d
```


## 并发
[并发,线程锁](https://www.jianshu.com/p/dc94f2099277)

### 同步锁 sync.Mutex

*  lock、unlock 不在同一个 routine 中，不能保证顺序的一致性。 sync.Mutex 不能对为加锁的 状态解锁，否则会出现异常不能保证正常工作

```golang
func main() {
	var mu sync.Mutex

	go func(){
		fmt.Println("你好, 世界")
		mu.Lock()
	}()

	mu.Unlock()
}
```

### sync.WaitGroup

```golang
func main() {
	var wg sync.WaitGroup

	// 开N个后台打印线程
	for i := 0; i < 10; i++ {
		fmt.Println("----")
		wg.Add(1)

		go func() {
			fmt.Println("你好, 世界" + string(1))
			wg.Done()
		}()
	}

	// 等待N个后台线程完成
	fmt.Println("will end")
	wg.Wait()
	fmt.Println("end")
}

```

* result

```js
----
----
----
----
----
----
----
----
----
----
will end
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
你好, 世界
end
```

### 通道 chan

```golang
func main() {

	// 使用 `make(chan val-type)` 创建一个新的通道。
	// 通道类型就是他们需要传递值的类型。
	messages := make(chan string)

	// 使用 `channel <-` 语法 _发送(send)_ 一个新的值到通道中。这里
	// 我们在一个新的 Go 协程中发送 `"ping"` 到上面创建的
	// `messages` 通道中。
	go func() { messages <- "ping" }()

	// 使用 `<-channel` 语法从通道中 _接收(receives)_ 一个值。这里
	// 将接收我们在上面发送的 `"ping"` 消息并打印出来。
	msg := <-messages
	fmt.Println(msg)
}

```

## 上产消费模型

```golang
// 生产者: 生成 factor 整数倍的序列
func Producer(factor int, out chan<- int) {
	for i := 0; ; i++ {
		out <- i*factor
	}
}

// 消费者
func Consumer(in <-chan int) {
	for v := range in {
		fmt.Println(v)
	}
}
func main() {
	ch := make(chan int, 64) // 成果队列

	go Producer(3, ch) // 生成 3 的倍数的序列
	go Producer(5, ch) // 生成 5 的倍数的序列
	go Consumer(ch)    // 消费 生成的队列

	// 运行一定时间后退出
	time.Sleep(5 * time.Second)
}

```

## 订阅者模式-模型

```golang

type (
	subscriber chan interface{} 	// 订阅者为一个管道
	topicFunc func(v interface{}) bool // 主题为一个过滤器, 过滤不同的 订阅者是否分发数据
)

type Publisher struct {
	m sync.RWMutex		// 读写锁
	buffer int			// 订阅队列的缓存大小
	timeout time.Duration	// 发布超时时间
	subscribers map[subscriber]topicFunc // 订阅者信息
}

// 创建发布者对象
func NewPublisher(publishTimeOut time.Duration, buffer int) *Publisher {
	return &Publisher{
		buffer: buffer,
		timeout: publishTimeOut,
		subscribers: make(map[subscriber]topicFunc),
	}
}

// 添加订阅者
func (p *Publisher)SubscribeTopic(topic topicFunc) chan interface{} {
	ch := make(chan interface{}, p.buffer)
	p.m.Lock()
	p.subscribers[ch] = topic
	p.m.Unlock()
	return ch
}

// 添加订阅者， 订阅全部主题
func (p *Publisher)Subscribe() chan interface{} {
	return p.SubscribeTopic(nil)
}

// 退出订阅
func (p *Publisher)Evict(sub chan interface{}) {
	p.m.Lock()
	defer p.m.Unlock()
	delete(p.subscribers, sub)
	close(sub)
}

// 发送主题
func (p *Publisher)sendTopic(sub subscriber, topic topicFunc, v interface{}, wg *sync.WaitGroup) {
	defer  wg.Done()
	
	// 过滤 不同的通道信息
	if topic != nil && topic(v) {
		return
	}

	select {
	 case sub <- v:
	 	case <- time.After(p.timeout):
	}
}

// 发布一个主题
func (p *Publisher)Publish(v interface{}) {
	p.m.Lock()
	defer p.m.Unlock()

	var wg sync.WaitGroup
	for sub, topic := range  p.subscribers {
		wg.Add(1)
		go p.sendTopic(sub, topic, v, &wg)
	}
}

// 关闭所有发布对象，同事关闭所有的订阅者管道

func (p *Publisher) Close() {
	p.m.Lock()
	defer p.m.Unlock()

	for sub := range p.subscribers {
		delete(p.subscribers, sub)
		close(sub)
	}
}


func main() {
	p := NewPublisher(100*time.Millisecond, 10)
	defer p.Close()

	all := p.Subscribe()
	golang := p.SubscribeTopic(func(v interface{}) bool {
		if s, ok := v.(string); ok {
			return strings.Contains(s, "golang")
		}
		return false
	})

	p.Publish("hello,  world!")
	p.Publish("hello, golang!")

	go func() {
		for  msg := range all {
			fmt.Println("all:", msg)
		}
	} ()

	go func() {
		for  msg := range golang {
			fmt.Println("golang:", msg)
		}
	} ()

	// 运行一定时间后退出
	time.Sleep(3 * time.Second)
}

```

## golang 相关语法重点
[语法重点](https://gobyexample.xgwang.me/?nsukey=VGF60Wh3svD3%2Bbwds9mcOvX%2B9%2BfqrHC1IiK4VOhVfvvyamIDfmPvhltjeW49MNgMHxPp8xoWDnsgdwK66g28QI7lRGrRzPk5tFwq972G9UB80K4HSKJXqfiaCn03Vd3lX8VBHPwqOzYaM8O%2FoGDZeUYhTm0J2DgkOTtPvqP9l3VSYMI%2F45sgrsKBrOcCTEJqxVIYFyu5KBtwTV1WtRbNZw%3D%3D)