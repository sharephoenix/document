<template>
  <div @click="desktopLink">点击打开demo</div>
</template>

<script>
export default {
  name: "quicklink",
  methods: {
    desktopLink () {
      window.open(`blackboard://${btoa('https://xp.xiaoheiban.cn/?params=xp://touch-demo&enter=/index.html')}`)
      window.href = `blackboard://${btoa('https://xp.xiaoheiban.cn/?params=xp://touch-demo&enter=/index.html')}`
      window.console.log('desktopLink')
    }
  },
  mounted () {
  }
}
</script>