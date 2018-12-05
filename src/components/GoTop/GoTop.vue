<template>
  <div class="goTop" @click="gotoTop">


  </div>
</template>

<script>
  export default {

    data () {
      return {}
    },
    methods:{
      gotoTop(){
        (function smoothscroll(){
          document.querySelector('.home').style.transform='translate(0px, 0px) scale(1) translateZ(0px)'
          console.log( document.querySelector('.home').style.transform)
        })();
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .goTop
    width 100px
    height 100px
    border-radius 50%
    z-index 20
    position fixed
    bottom 130px
    right 40px
    background-image url("../../assess/images/goTop.png")
    background-size 100%
    background-repeat no-repeat
</style>
