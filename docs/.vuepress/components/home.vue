<template>
<div class="home-container">
  <div class="header-cls">
    <img style="width: auto; height: 360px;" src="../../assets/a.png" alt="">
  </div>
<div class="sub-link">
  <a href="https://blog.csdn.net/wang258533488/article/details/78901124">Reids 待学习</a>
  <a href="https://leetcode.com/problemset/all/">算法练习</a>
  <a href="https://www.jianshu.com/p/6e8c608f24c8">发布到github</a>
</div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
html,body,div {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header-cls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

.home-container {
  position: absolute;
  left: 0;
  top: 60px;
  width: 100%;
  height: calc(100% - 60px);
}

.sub-link {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  a {
    padding: 0 20px;
  }
}
</style>