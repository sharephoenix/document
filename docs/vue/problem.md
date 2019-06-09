# 记录 Vue 使用学习过程中遇见的问题，和解决方法

## Vue 模板之间传值

  1. 通过 ref 直接调用子模板的方法
  2. 子模板使用 @ 绑定父类事件， 字模板使用 this.$emit('actionname',{}) 调用父模板的方法
  3. 使用 emitBus
   ```j
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