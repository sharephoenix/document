# Docker 简单打包镜像 for mac

## demo

1. 创建 docker 文件夹。
2. docker 文件夹中创建 Dockerfile main.go 文件。 文件目录如下：
3. main.go 中的代码，和 Dockerfile 中的内容如下
4. 进入 docker 文件夹中执行： docker build -t zcdocker .
5. 运行 docker run -it -d -p 9191:8080  zcdocker

```Dir
- docker
 - Dockerfile
 - main.go
```

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/zc",hello)
	http.ListenAndServe(":8080",nil)
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w,"Hello Docker Form Golang!")
}
```

```Dockerfile
FROM golang # 基础镜像

MAINTAINER lanys "550709871@qq.com" # 作者 联系方式

WORKDIR $GOPATH/src/godocker # 为后续命令配置工作目录

ADD . $GOPATH/src/godocker # ADD SRC DEST

RUN go build main.go

EXPOSE 8080

ENTRYPOINT ["./main"] # 运行时候指定的命令
```

## kubectl (k8s)

1. 下载 docker 的 edge 版本（一定要这个版本）
2. 自行用 docker 拉取 kubernetes 的相关镜像
3. 还不行，就尝试 vpn 然后，重新启动 docker、kubernetes

## 流程

[service](https://blog.csdn.net/liukuan73/article/details/82585732)

1. service
2. deployment (如果没有这层，pod 只可以在集群内部访问)
3. pod

### delete

```kubectl
kubectl delete pod example-pod
```

### create

```kubectl
kubectl create -f pod.yaml # 穿件一个 pod
kubectl delete -f pod.yaml # 可以删除创建的 pod
```

### 获取当前的 pod

```
kubectl get pods
```

### 获取当前的 service

```
kubectl get service
```

### 查看集群信息

```kubectl
kubectl cluster-info
```

## kubenetes 介绍
[推荐视频](https://www.bilibili.com/video/av60476564?from=search&seid=1428698472244882116)

* kubenets 是什么
  * 自动化容器编排系统
  * 自动化容器部署、扩展和管理
  * 借鉴与 google 内部集群管理系统 borg 和 omega （15年的生产环境应用经验）
  * 驾驶员（pivlot）舵手（helmsman）
* 解决什么问题
* 为什么这么火
  * kubernetes 架构介绍
  * minikube 部署
  * kubernetes 核心概念介绍及操作实战
* 什么是容器
  * 一系列隔离运行的进程，每个容器都有自己的 pid user uts network 栈命名空间
  * 与传统的 vm 启动快、性能消耗小、更轻量级
* 创新的地方
  * cgroup， namespace，（linux 提供）
  * union fs （Aufs， device mapper）联合文件系统
* k8s 默认使用 docker 引擎
* 容器的编排（其他系统：docker swarm, mesos, kubernetes）
  * 容器解决了应用一次打包， 部署，运行问题
    * 一次打包随处运行
  * 容器的挑战
    * 跨机器部署
    * 资源调度
    * 负载均衡
    * 自动伸缩
    * 容错处理
    * 服务发现
    * docker compose // 本地容器启动使用 同时启动服务相关的容器， 类比 kubernetes
  * 容器的调度，资源管理，服务管理
  * 把整个数据中心，当做一个抽象的机器， 10000台 3.1万核， 100T 内存

## kubernetes 架构核心介绍

* 结构
  * master
  * worknode
* master
  * api server - 接收用户额命令请求
  * scheduler - 资源调度，
  * controller manager - 监控 docker 服务运行的情况
	* dashboard(addons)
* kubelet
  * 运行 node 上的 agent 
  * 处理 master 节点下发到本地节点的任务，管理pod和其中的容器
  * 定期向 master 汇报节点资源的使用情况
* kube-proxy
  * 运行在 node 节点上的 agent
  * 实现 service 的抽象， 为一组 pod 抽象的服务（service）提供统一接口并土工负载均衡功能
* Container Runtime
  * Docker
  * Rkt
* Etcd
  * 类似与 zookeeper， 有高一致性
  * 用于保存集群所有的网络配置和对象的状态信息。
  * k8s 中用作分布式 kv 存储系统
* 以下虚线部分为物理机，也可以看做虚拟机

![架构](/docs/assets/k8s3.png)

* 调用流程
  * 用户通过 kubectl 来操作，如：部署新的应用
  * api server 请求，并存储在 Etcd
  * watcher 和 controllers  检测到资源状态的变化，并进行操作
  * replicaset watcher、controller 检测到新的 app， 创建 新的 pod 达到期望的示例个数
  * kubelet 检测 pods， 并通过容器运行时部署他们
  * kubeporxy 管理 pod 的网络， 包括服务发现，负载均衡
* 可以使用 minikube 本地部署


![node](/docs/assets/k8s2.png)

![master](/docs/assets/k8s1.png)

## kubenetes 常用对象介绍

* 所有的均为资源
  * 资源实例化后就是对象
  * work load: pod, replicationcontroller, replicaset, delployment, statefulset, deamonset, job, cronjob, 主要介绍前四种
  * Service discovery/balance:serivce, ingress
  * 配置与存储： volume, CSI,  configMap， Secret
  * 集群级别资源
    * NameSpace(kube-system, default, node)
  * 元数据相关资源
    * hpa, podtemplate, limitrange
  
* 通过 restful api 来对对象进行操作（apiserver json）
  * kubectl => restful 调用
  * yaml

* 命令式（一步一步调用过程，达成目标）和声明式（只说目标，不管过程）- 一般使用后两种(最终都是将 yaml 文件转换问 json 发送到 apiserver 上)
  * kubectl run nginx /// 命令
  * kubectl create/delete *.yaml
  * kubectl apply + *.yaml

* resource definition
  * apiVersion
  * Kind: Pod/RC/RS/Depolyment
  * Meta:
    * Name:
    * NameSpace:
    * Label:
  * Spec:
    * 不容类型的资源， 描述
  * status // 系统填的

```kubectl
kubectl explain	pod.Meta // 告诉你pod 应该怎么写
kubectl api-resources	// 查看有哪些使用的资源
```

* 下图为一个 pod 的结构
  * pause 容器只为多个 container 创建 一个虚拟网卡
  * 如果没有 pause 容器，只有一个 container 则为 docker 的结构

![image](/docs/assets/k8s0.png)

## kubenetes service
