# 部署

## ApplicationController

* kubectl create -f ReplicationController.yaml
  * 创建
* kubectl get pod
  * 查看创建的 pod
* kubectl describe ReplicationController/nginx
  * 查看描述
* kubectl edit -f ReplicationController.yaml
  * 编辑 yaml， 用这个方法修改配置文件。编辑后自动启用

## label 的使用

* kubectl create -f label.yaml
  * 创建一个 pod
* kubectl get pods -l env=prod
  * 获取环境为 prod 的 pod
* kubectl get pods -l app=nginx
  * 获取 app 为 nginx 的 pod
* kubectl get pods -l 'env in (prod, qa)'
  * 查找环境为 prod qa 的 pod


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

## 强制端口号暴露
* kubectl get deploy
  * 获取所有的 deployment 并选择 nginx-deployment-demo
* kubectl expose deployment nginx-deployment-demo --type=NodePort
  * 使用 NodePort 类型暴露
* kubectl get service
  * 查看service: nginx-deployment-demo   NodePort    10.104.29.106   <none>        80:30283/TCP     10s
* 本地使用 localhost:30283 就可以争取访问

## Service
![service](/docs/assets/k8s-service.png)
* 设计 k8s 的网络
  * 可以创建 4 中类型的 service；clusterIp, NodePort, LoadBalancer, ExternalName
* kubectl explain service.spec
  * 查看 配置说明
* kubectl get service
  * 查看service: nginx-service           NodePort    10.98.236.6     <none>        8080:30006/TCP   7s
* 本地使用 localhost:30006 就可以争取访问


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

## Overlay Network

* 实现不同Node 之间 pod 的交互; CNI 规范
* KubeProxy 把 service ip 之间的访问转化为 pod 之间的访问
  * 三种模式： userspace，iptables
    * userspace 用户控件的代理模式
![net](/docs/assets/k8s-net-agent-0.png)

## apiServer 调用过程 （waiting）

## etcd (waiting)
