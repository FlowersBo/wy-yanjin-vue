<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  export default {
    components:{
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    background #F4F4F4
    position relative

</style>
