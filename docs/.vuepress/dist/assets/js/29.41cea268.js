(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{86:function(e,t,s){"use strict";s.r(t);var i=s(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/liukuan73/article/details/82585732",target:"_blank",rel:"noopener noreferrer"}},[e._v("service"),s("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/av60476564?from=search&seid=1428698472244882116",target:"_blank",rel:"noopener noreferrer"}},[e._v("推荐视频"),s("OutboundLink")],1)]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"随笔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#随笔","aria-hidden":"true"}},[this._v("#")]),this._v(" 随笔")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubectl-k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-k8s","aria-hidden":"true"}},[this._v("#")]),this._v(" kubectl (k8s)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("下载 docker 的 edge 版本（一定要这个版本）")]),this._v(" "),t("li",[this._v("自行用 docker 拉取 kubernetes 的相关镜像")]),this._v(" "),t("li",[this._v("还不行，就尝试 vpn 然后，重新启动 docker、kubernetes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 流程")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("service")]),this._v(" "),t("li",[this._v("deployment (如果没有这层，pod 只可以在集群内部访问)")]),this._v(" "),t("li",[this._v("pod")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[this._v("#")]),this._v(" delete")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-kubectl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl delete pod example-pod\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[this._v("#")]),this._v(" create")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-kubectl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl create -f pod.yaml # 穿件一个 pod\nkubectl delete -f pod.yaml # 可以删除创建的 pod\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"获取当前的-pod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取当前的-pod","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取当前的 pod")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl get pods\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"获取当前的-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取当前的-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取当前的 service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl get service\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"查看集群信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看集群信息")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-kubectl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl cluster-info\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubenetes-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubenetes-介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" kubenetes 介绍")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("kubenets 是什么\n"),s("ul",[s("li",[e._v("自动化容器编排系统")]),e._v(" "),s("li",[e._v("自动化容器部署、扩展和管理")]),e._v(" "),s("li",[e._v("借鉴与 google 内部集群管理系统 borg 和 omega （15年的生产环境应用经验）")]),e._v(" "),s("li",[e._v("驾驶员（pivlot）舵手（helmsman）")])])]),e._v(" "),s("li",[e._v("解决什么问题")]),e._v(" "),s("li",[e._v("为什么这么火\n"),s("ul",[s("li",[e._v("kubernetes 架构介绍")]),e._v(" "),s("li",[e._v("minikube 部署")]),e._v(" "),s("li",[e._v("kubernetes 核心概念介绍及操作实战")])])]),e._v(" "),s("li",[e._v("什么是容器\n"),s("ul",[s("li",[e._v("一系列隔离运行的进程，每个容器都有自己的 pid user uts network 栈命名空间")]),e._v(" "),s("li",[e._v("与传统的 vm 启动快、性能消耗小、更轻量级")])])]),e._v(" "),s("li",[e._v("创新的地方\n"),s("ul",[s("li",[e._v("cgroup， namespace，（linux 提供）")]),e._v(" "),s("li",[e._v("union fs （Aufs， device mapper）联合文件系统")])])]),e._v(" "),s("li",[e._v("k8s 默认使用 docker 引擎")]),e._v(" "),s("li",[e._v("容器的编排（其他系统：docker swarm, mesos, kubernetes）\n"),s("ul",[s("li",[e._v("容器解决了应用一次打包， 部署，运行问题\n"),s("ul",[s("li",[e._v("一次打包随处运行")])])]),e._v(" "),s("li",[e._v("容器的挑战\n"),s("ul",[s("li",[e._v("跨机器部署")]),e._v(" "),s("li",[e._v("资源调度")]),e._v(" "),s("li",[e._v("负载均衡")]),e._v(" "),s("li",[e._v("自动伸缩")]),e._v(" "),s("li",[e._v("容错处理")]),e._v(" "),s("li",[e._v("服务发现")]),e._v(" "),s("li",[e._v("docker compose // 本地容器启动使用 同时启动服务相关的容器， 类比 kubernetes")])])]),e._v(" "),s("li",[e._v("容器的调度，资源管理，服务管理")]),e._v(" "),s("li",[e._v("把整个数据中心，当做一个抽象的机器， 10000台 3.1万核， 100T 内存")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubernetes-架构核心介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-架构核心介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" kubernetes 架构核心介绍")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("结构\n"),s("ul",[s("li",[e._v("master")]),e._v(" "),s("li",[e._v("worknode")])])]),e._v(" "),s("li",[e._v("master\n"),s("ul",[s("li",[e._v("api server - 接收用户额命令请求")]),e._v(" "),s("li",[e._v("scheduler - 资源调度，")]),e._v(" "),s("li",[e._v("controller manager - 监控 docker 服务运行的情况\n"),s("ul",[s("li",[e._v("dashboard(addons)")])])])])]),e._v(" "),s("li",[e._v("kubelet\n"),s("ul",[s("li",[e._v("运行 node 上的 agent")]),e._v(" "),s("li",[e._v("处理 master 节点下发到本地节点的任务，管理pod和其中的容器")]),e._v(" "),s("li",[e._v("定期向 master 汇报节点资源的使用情况")])])]),e._v(" "),s("li",[e._v("kube-proxy\n"),s("ul",[s("li",[e._v("运行在 node 节点上的 agent")]),e._v(" "),s("li",[e._v("实现 service 的抽象， 为一组 pod 抽象的服务（service）提供统一接口并土工负载均衡功能")])])]),e._v(" "),s("li",[e._v("Container Runtime\n"),s("ul",[s("li",[e._v("Docker")]),e._v(" "),s("li",[e._v("Rkt")])])]),e._v(" "),s("li",[e._v("Etcd\n"),s("ul",[s("li",[e._v("类似与 zookeeper， 有高一致性")]),e._v(" "),s("li",[e._v("用于保存集群所有的网络配置和对象的状态信息。")]),e._v(" "),s("li",[e._v("k8s 中用作分布式 kv 存储系统")])])]),e._v(" "),s("li",[e._v("以下虚线部分为物理机，也可以看做虚拟机")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/docs/assets/k8s3.png",alt:"架构"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("调用流程\n"),s("ul",[s("li",[e._v("用户通过 kubectl 来操作，如：部署新的应用")]),e._v(" "),s("li",[e._v("api server 请求，并存储在 Etcd")]),e._v(" "),s("li",[e._v("watcher 和 controllers  检测到资源状态的变化，并进行操作")]),e._v(" "),s("li",[e._v("replicaset watcher、controller 检测到新的 app， 创建 新的 pod 达到期望的示例个数")]),e._v(" "),s("li",[e._v("kubelet 检测 pods， 并通过容器运行时部署他们")]),e._v(" "),s("li",[e._v("kubeporxy 管理 pod 的网络， 包括服务发现，负载均衡")])])]),e._v(" "),s("li",[e._v("可以使用 minikube 本地部署")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/docs/assets/k8s2.png",alt:"node"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/docs/assets/k8s1.png",alt:"master"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubenetes-常用对象介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubenetes-常用对象介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" kubenetes 常用对象介绍")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("所有的均为资源")]),e._v(" "),s("ul",[s("li",[e._v("资源实例化后就是对象")]),e._v(" "),s("li",[e._v("work load: pod, replicationcontroller, replicaset, delployment, statefulset, deamonset, job, cronjob, 主要介绍前四种")]),e._v(" "),s("li",[e._v("Service discovery/balance:serivce, ingress")]),e._v(" "),s("li",[e._v("配置与存储： volume, CSI,  configMap， Secret")]),e._v(" "),s("li",[e._v("集群级别资源\n"),s("ul",[s("li",[e._v("NameSpace(kube-system, default, node)")])])]),e._v(" "),s("li",[e._v("元数据相关资源\n"),s("ul",[s("li",[e._v("hpa, podtemplate, limitrange")])])])])]),e._v(" "),s("li",[s("p",[e._v("通过 restful api 来对对象进行操作（apiserver json）")]),e._v(" "),s("ul",[s("li",[e._v("kubectl => restful 调用")]),e._v(" "),s("li",[e._v("yaml")])])]),e._v(" "),s("li",[s("p",[e._v("命令式（一步一步调用过程，达成目标）和声明式（只说目标，不管过程）- 一般使用后两种(最终都是将 yaml 文件转换问 json 发送到 apiserver 上)")]),e._v(" "),s("ul",[s("li",[e._v("kubectl run nginx /// 命令")]),e._v(" "),s("li",[e._v("kubectl create/delete *.yaml")]),e._v(" "),s("li",[e._v("kubectl apply + *.yaml")])])]),e._v(" "),s("li",[s("p",[e._v("resource definition")]),e._v(" "),s("ul",[s("li",[e._v("apiVersion")]),e._v(" "),s("li",[e._v("Kind: Pod/RC/RS/Depolyment")]),e._v(" "),s("li",[e._v("Meta:\n"),s("ul",[s("li",[e._v("Name:")]),e._v(" "),s("li",[e._v("NameSpace:")]),e._v(" "),s("li",[e._v("Label:")])])]),e._v(" "),s("li",[e._v("Spec:\n"),s("ul",[s("li",[e._v("不容类型的资源， 描述")])])]),e._v(" "),s("li",[e._v("status // 系统填的")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-kubectl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl explain\tpod.Meta // 告诉你pod 应该怎么写\nkubectl api-resources\t// 查看有哪些使用的资源\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("下图为一个 pod 的结构\n"),t("ul",[t("li",[this._v("pause 容器只为多个 container 创建 一个虚拟网卡")]),this._v(" "),t("li",[this._v("如果没有 pause 容器，只有一个 container 则为 docker 的结构")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/docs/assets/k8s0.png",alt:"image"}})])}],!1,null,null,null);t.default=r.exports}}]);