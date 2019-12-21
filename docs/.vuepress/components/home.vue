<template>
<div class="home-container">
  <div class="header-cls">
    <img style="width: auto; height: 460px;" src="../../assets/a.gif" alt="">
  </div>
<div class="sub-link">
  <a href="https://blog.csdn.net/wang258533488/article/details/78901124">Reids 待学习</a>
  <a href="https://leetcode.com/problemset/all/">算法练习</a>
  <a href="https://www.jianshu.com/p/6e8c608f24c8">发布到github</a>
  <a href="./nginx/nginx.html">nginx</a>
</div>
<footer>
  <div>
    <span>关于我们</span>
    <span>隐私保护</span>
    <span>反馈意见</span>
  </div>
  <div><span>我没有公司，没有 ICP</span></div>
  <div><span>没有备案号</span></div>
</footer>
</div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {
    window.console.log('route::', this.$route)
  }
}
</script>

<style lang="scss">
html,body,div {
  padding: 0;
  margin: 0;
  // height: 100%;
  // box-sizing: border-box;
}

.header-cls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

.home-container {
  width: 100%;
  // height: 100%;
}

.theme-container {
  padding: 0;
}

#app {
  padding: 0;
}

.sub-link {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  a {
    padding: 0 10px;
  }
}

.no-sidebar {
  .page {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;

    .page-edit {
      position: relative;
      height: 0 !important;
      padding: 0;
      margin: 0;
    }

    .content {
      margin: 0;
      max-width: 100% !important;
      padding: 0px !important;
      min-height: 100% !important;
      margin-bottom: 0;
      padding: 0 !important;

      p {
        display: block;
        padding: 0px;
        margin: 0;
      }
    }

    .sidebar {
      width: 319px;
    }
  } 
}

footer {
  margin-top: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background:#2b2b2b;

  div {
    margin-top: 20px;
    font-size: 14px;
    line-height: 14px;
    height: 14px;

    &:nth-child(1) {
      margin-top: 0px;
      color: #e6e6e6;

      span {
        display: inline-block;
        width: 90px;
        text-align: center;
        border-left: 1px solid white;

        &:nth-child(1) {
          border-left: 0;
        }
      }
    }

    &:nth-child(2) {
      color: #999;
    }

    &:nth-child(3) {
      color: #999999;
    }
  }
}
</style>