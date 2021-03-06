# 记录 Vue 使用学习过程中遇见的问题，和解决方法

## Vue 模板之间传值

  1. 通过 ref 直接调用子模板的方法
  2. 子模板使用 @ 绑定父类事件， 字模板使用 this.$emit('actionname',{}) 调用父模板的方法
  3. 使用 emitBus

   ```js
   emitBus = new Vue()
   this.emitBus.emit('actionname', {})
   this.emitBus.$on('actionname', () => {})
   ```

## 模板事件绑定
1. 模板直接帮定 父模板事件
   ```js
   @click.native=""
   ```
2. 模板事件不穿透
   ```js
   @click.stop=""
   ```
3. 1 和 2 结合使用
  ```js
  @click.stop.native=""
  ```

## 移动端键盘自动隐藏功能
1. 在 input、textarea 中使用 @click.stop
 ```html
 <div @click="使用有空事件，就可以实现隐藏键盘的需求">
   <input @click.stop/>
   <textarea @click.stop/>
 </div>
 ```
## 滑动在 content-container 上进行

```html

<div @scroll="" class="content-container">
  <div class="content">
  </div>
</div>
```
```css
html body {
  width: 100%;
  height: 100%;
}

.content-container {
  width: 100%;
  height: 100%;
  -webkit-scroll: touch;  // 兼容 ios 滑动卡顿

  .content {
    width: 100%;
    height: auto;
    overflow-y: scroll;
  }
}
```

## 默认图片img

```html
<img src="" style="hspace: 80px; border: 1px solid red; height: 900px" @click="fff" :onerror="defaultImage" alt="The Pulpit Rock" width="304" height="228">

data() {
    return {
      defaultImage: `this.src='${require('../assets/logo.png')}'`
    }
  }
```

## 限制 input textarea 的输入字数
### 由于 textarea 比较特殊，所以用 textarea 举例

1. maxlength 限制输入字数 最大字数 500
   
```html
  <textarea @click.stop class="suggestion-contain" maxlength="500" v-model="reason" placeholder="请输入您的审批意见"></textarea>
```

2. watch 从新过滤字数, 避免黏贴过多文字产出的 bug, 由于 maxlength 统计 \t \n 的长度和 string.length 的长度规则不一样，所以要重新处理。```<input> ```标签没有这个问题。

```js
watch: {
    reason: {
      handler (val) {
        const maxLength = 500
        if (val.length >= maxLength) {
          const content = this.introduction.replace(/(\s*)/g, '')
          const count = this.introduction.length - content.length
          this.introduction = this.introduction.substring(0, maxLength - count)
        }
      },
      immediate: true
    }
  }
```

## 代码如何适配移动端

```js
  module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: '375', // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      // propList: ['*', '!background-image'],
      selectorBlackList: [
        // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        'ignore'
      ],
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false // 允许在媒体查询中转换`px`
      // exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
  }
}
```

## iconfont 

1. 使用 iconfont 可以减少图标的网络请求，提高性能。
2. iconfont 本质上是 svg, 无网路请求。
3. 具体怎么使用请看官网 [iconfong官网](https://www.iconfont.cn/)

## 文字输入过多,后面 "..."

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 本地调试跨域问题

1. vue.config.js 配置 devServer

```js
module.exports = {
  publicPath,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss"; $userSelect: ${process.env.VUE_APP_USER_SELECT || 'none'};`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
```

2. pathRewrite
  这个字段匹配字符串并替换

## vue 环境变量配置问题

| 文件名 | NODE_ENV | 说明
| --- | --- | ---
| .env | development | 基本环境配置文件
| .env.development | development | 开发环境配置文件
| .env.staging | 哈哈哈，其实可以自定义 | 预生产环境配置文件
| .env.production | production | 生产基本环境配置文件

最终的环境变量取 当前环境变量 和 .env 环境变量的集合，且当前环境变量有限极高

如 1:

```js
.env VUE_APP_ISWEB = true
.env.development VUE_APP_ISWEB = false
最终 VUE_APP_ISWEB 为 'false'
```

如 2：

```js
.env VUE_APP_ISWEB = true
.env.development // 没有配置 VUE_APP_ISWEB
最终 VUE_APP_ISWEB 为 'true'
```

## span 文字换行

```css

span {
  display: block;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap !important;
}

```

## textarea 点击 ios 键盘无法弹起

* css 设置 user-select: none; 可能设置了全局;

解决方案：

```css
textarea {
  user-select: auto;
}
```

## div 不能滚动 移动端兼容

* 案例一
```css
.test {
  overflow: hidden;
  overflow-y: scroll;
}
```

* 案例二： 某些机型不可以滚动
```css
.test {
  overflow-x: hidden;
  overflow-y: auto;
}
```

* 案例二： flex 低版本可能不兼容，必须 指定高度 height:100%;
```css
.test {
  flex: 1;
}
```

* 解决方法
```css
.test {
  overflow-x: hidden;
  overflow-y: scroll;
}
```

## canvas div -> image

* npm install html2canvas --save
* 不要使用 backgroud-image
  
```js
html2canvas(this.$refs.ff).then(canvas => {
        canvas.style.height = '100px'
        canvas.style.width = '100px'
        let url = canvas.toDataURL()
        console.log(url)
        this.gg = url
        document.body.appendChild(canvas)
      });
```

## 搜索键盘问题

* 要加 form 标签才会有 "搜索文字属性"
* @submit.prevent 阻止第一次搜索界面刷新问题

```html
<form action
      @submit.prevent
      class="xp-search-form">
        <input id="search" type="search"
        class="xp-search-input"
          @keyup.enter="beginSearch"
          v-model="innerSearchContent"
          :placeholder="placeHolder"/>
      </form>
```

## 组件偏移位置

* getBoundingClientRect

```js
this.$refs[currentRef][0].getBoundingClientRect().y
```

## 移动 input 搜索功能

* form + type="search" - 改变键盘的搜索按钮
* @submit.prevent - 阻止搜索点击后界面刷新问题
* @keyup.enter="beginSearch" - 响应 ”搜索“ 点击事件

```html
<form action
      @submit.prevent
      class="xp-search-form">
        <input id="xp-search" type="search"
        class="xp-search-input"
          @keyup.enter="beginSearch"
          v-model="innerSearchContent"
          :placeholder="placeHolder"/>
      </form>
```

## 某些 android v-for 不显示，手动触碰界面界面渲染

* 解决方法一：

添加一条不显示的模板: ```<book-group-item v-show="false"></book-group-item>```

  ```html
  <book-group-item v-show="false"></book-group-item>
    <book-group-item v-for="(item, index) in groups"
    :key="index"
    :addressType="addressType"
    :title="item.name"
    :count="item.count"
    :bgColor="bgColor()"
    :groupItems="addressType === 2?[]:[item.headUrlList]"
    @handlerDetail="handlerDetail(item.id, item.name)"/>
  ```

* 解决方法二：
  
  groups 数组给默认值，不能是空数组

  ```html
  groups:[] -- 错误示范
  groups:[{}] -- 正确示范
  ```
