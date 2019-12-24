<template>
  <div>
    <div @click="toShowWiki" style="color: white;">xxx</div>
    <a v-if="showWiki" href="/blog/wiki/userwiki.html">wiki</a>
  </div>
</template>

<script>
export default {
  name: "wiki",
  data () {
    return {
      showWiki: false
    }
  },
  methods: {
    toShowWiki () {
      window.console.log("------")
      this.showWiki = !this.showWiki
    }
  }
}
</script>