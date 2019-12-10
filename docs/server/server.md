# 服务器相关点 + 运维

## docker

## k8s

* k8s是一个docker容器管理工具
[k8s](jianshu.com/p/4869375928d6)

## jenkins

* 构建版本工具
* 私有化部署
* docker-jenkins

['链接'](https://jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/)

```docker
docker run --rm -u root -p 8080:8080 -v /Users/apple/jenkins/jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /Users/apple/jenkins/home:/home jenkinsci/blueocean
```

## nginx, redis, kafka, elk, tomcat, fastdfs, mongodb

## 自动化运维框架

* ansible
* puppet
* saltstack

## 运维监控

* zabbix
* nagios
* cacti

## 负载均衡

[负载均衡](https://blog.csdn.net/sdgihshdv/article/details/79475839)