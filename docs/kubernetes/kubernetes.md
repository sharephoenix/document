# 部署

## 配置说明
* metadata: 标记当前服务的名称和标签
* spec 中的 selector 向下选择 metadata 中的名称和标签
* containers 中的 name 定义容器启动后的名称， 
* containers 中的 ports 定义容器移动后暴露出来的端口
* containers 中的 image 启动容器使用的镜像
* service 中的 strategy 指定升级的策略，下面只有 滚动策略的配置
* targetPort 容器端口号
* port 服务端口号 或者 cluster 端口号， 可能说的不太准确
* nodePort 暴露给外部的端口号

## ApplicationController

* kubectl create -f ReplicationController.yaml
  * 创建
* kubectl get pod
  * 查看创建的 pod
* kubectl describe ReplicationController/nginx
  * 查看描述
* kubectl edit -f ReplicationController.yaml
  * 编辑 yaml， 用这个方法修改配置文件。编辑后自动启用

```yaml
---
apiVersion: v1
kind: ReplicationController
metadata:
  name: nginx
spec:
  replicas: 4
  selector:
    app: nginx
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.7.9
          ports:
            - containerPort: 80
```

## label 的使用

* kubectl create -f label.yaml
  * 创建一个 pod
* kubectl get pods -l env=prod
  * 获取环境为 prod 的 pod
* kubectl get pods -l app=nginx
  * 获取 app 为 nginx 的 pod
* kubectl get pods -l 'env in (prod, qa)'
  * 查找环境为 prod qa 的 pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: label-nginx
  labels:
    app: pod-label-example
    env: prod
spec:
  containers:
  - name: label-web
    image: nginx
    ports:
    - containerPort: 80
```

## Deployment
* kubectl create -f deployment.yaml
* kubectl get deployment
* kubectl describe deployment nginx-deployment
* kubectl apply -f deployment.yaml
  * 滚动升级
* watch -n l kubectl get deployment
  * 监控 deployment 的情况
* kubectl get pods -o wide
* cubectl rollout status deployment/nginx-deployment
  * 回滚 

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-demo
  labels:
    app: deployment-nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
```

## 强制端口号暴露
* kubectl get deploy
  * 获取所有的 deployment 并选择 nginx-deployment-demo
* kubectl expose deployment nginx-deployment-demo --type=NodePort
  * 使用 NodePort 类型暴露
* kubectl get service
  * 查看service: nginx-deployment-demo   NodePort    10.104.29.106   none        80:30283/TCP     10s
* 本地使用 localhost:30283 就可以争取访问

## Service
![service](/docs/assets/k8s-service.png)
* 设计 k8s 的网络
  * 可以创建 4 中类型的 service；clusterIp, NodePort, LoadBalancer, ExternalName
* kubectl explain service.spec
  * 查看 配置说明
* kubectl get service
  * 查看service: nginx-service           NodePort    10.98.236.6     none        8080:30006/TCP   7s
* 本地使用 localhost:30006 就可以争取访问

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  type: NodePort
  ports:
  - name: http
    port: 8080
    nodePort: 30006
    targetPort: 80
    protocol: TCP
  
```

## k8s 结构 三层网络
* Node
  * nodeIp(物理机 ip) NodeIp(node): nodePort
* Service
  * clusterIp(pod <-> service):port
* Pod
  * podIp(pod - pod):targetPort

### clusterIP

* 不需要外部访问，只提供 cluster 内部 服务访问
* kubectl create -f clusterIpservice.yaml
  * 创建 cluserIp
* kubectl get service
  * 获取去查看 cluterIP

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  ports:
  - port: 8080
    targetPort: nginx-port
    protocol: TCP
  selector:
    app: nginx
  type: ClusterIP

```

## Overlay Network

* 实现不同Node 之间 pod 的交互; CNI 规范
* KubeProxy 把 service ip 之间的访问转化为 pod 之间的访问
  * 三种模式： userspace，iptables
    * userspace 用户控件的代理模式
![net](/docs/assets/k8s-net-agent-0.png)

## apiServer 调用过程 （waiting）

## etcd (waiting)
