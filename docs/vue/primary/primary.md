# vue 初级入门

* demo 在以下链接 dev 分支 的 phoenix-vue 项目中

[demo:phoenix-vue:dev](https://github.com/sharephoenix/project_vue)

## 入门必备知识点

* 简单的 js 语法
* 简单的 css 语法
* 会安装软件

## 环境安装

1. 安装 nodejs
  * [官网链接](https://nodejs.org/en/)
  * mac 官方直接下载会自动安装 npm
  * 安装vue脚手架： npm install -g @vue/cli

   ```brew
   brew install nodejs
   ```

2. 安装 vscode
   * 请自己下载
  
3. 安装 vue

  ```action
  npm install -g @vue/cli
  ```

4. 创建 vue hellword 工程

   ```action
   vue create Helloworld
   ```

## 如果你不会 css, 自行学习下面的 demo 入门

  [demo](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## vue 界面结构

* template 标签下写 ui 布局，template 下只能有一个节点
* script 标签内写逻辑
* style 标签下写 布局样式 css
  
```vue
<template>
  <div class="page-container th-white">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      thColor: '',
      userInfo: {}
    }
  },
  watch: {
    userInfo: {
      handler(newVal, oldVal) {

      },
      immedate: true,
      deep: true
    }
  },
  methods: {

  },
  async mounted () {

  }
}
</script>

<style lang="scss">
.page-container {
  height: 100%;
  overflow: hidden;
}
</style>
```

## vue 中 script 标签

name: 可以理解为类名，驼峰命名
data: 界面中的属性定义
methods: 界面中的所有方法
mounted: 界面创建并挂载后的 生命周期方法
watch: 监听属性变化；immedate=true 表明立即变化；deep=true 表明 object 中内部属性变化可以被监听到；

## vue 工程文件 package.json

* 代码片段 1
  scripts 中都是可执行命令，eg: npm run serve

  ```js
   "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "staging": "vue-cli-service build --mode staging",
    "test": "vue-cli-service build --mode test",
    "lint": "vue-cli-service lint"
  },
  ```

## scss

* 安装命令

  ```js
  npm install node-sass sass-loader --save-dev
  ```

* 使用方法: lang="scss"; 注意：scoped 表明 css 的作用域在当前模板中

```js
<style lang="scss" scoped>
.page-container {
  height: 100%;
  overflow: hidden;
}
</style>
```

## router-view

* 安装 router 组件： npm install vue-router
* 用于界面路由跳转

 main.js 代码引入 router

 ```js
  import router from './router'
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
 ```

 router/index.js

 ```js
 import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/punching-list/PunchingList.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/punchingvs',
      name: 'Punchingvs',
      component: () => import('@/views/punching-vs/PunchingVs.vue')
    },
    {
      path: '/a/:punchardId',
      name: 'Punchingvs',
      component: () => import('@/views/punching-vs/PunchingVs.vue')
    }
  ]
})
 ```

 * 在入口处添加 路由标签

 ```html
 <template>
  <div class="page-container th-white">
    <router-view></router-view>
  </div>
</template>
 ```

* 路由跳转方法

 ```js
 this.$router.push('/a/b/punchardId')
 ```

* 获取 punchardId 值

 ```js
 this.$route.params.punchardId
 ```

* 其它传值方式自己写代码的时候学习吧

## axios 网络请求

* 安装依赖库: npm install axios --save
* 网络请求-get

```js
import axios from 'axios'
axios.get('/').then( res => {
  window.console.log(res)
}).catch(err => {
  window.console.log(res)
})
```

* axios 请求其它信息设置

```js
import axios from 'axios'

/// 设置默认请求头
axios.defaults.headers.common["token"] = 'token';
/// 设置默认超时时间
axios.defaults.timeout =  6000;

/// 这里可以设置公共头部
axios.interceptors.request.use(function (config) {
  window.console.log('-------99',config)
  let token = ''
  if(localStorage.getItem('admin_info') == null){
    return config
  }else{
    token = JSON.parse(localStorage.getItem('admin_info')).token
  }
  if(config.data == '' || config.data == null || config.data ==undefined){
    if (token) {
      config.params['token'] = token
    }
    return config
  }else{
    if (token) {
      config.data['token'] = token
    }
    return config
  }

}, function (error) {

  return Promise.reject(error)
})

/// 拦截器，处理返回数据
axios.interceptors.response.use((res) => {
  window.console.log('raw', res)
  return JSON.stringify({name: 'alex', age: 12})
})
```
