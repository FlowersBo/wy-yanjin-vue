<template>
  <div class="container">
    <div><img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" class="headerImg"/></div>
    <div><img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"></img></div>
    <div class="con">
      <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
      <p class="download"></p>
      <p class="continue" @click="toHome"></p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toHome () {
        this.$router.replace('/home')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container{
    position absolute
    top 0
    left 0
    width px2rem(750)
    height:100%;
    background: #eee;
    div{
      img{
        width:100%
        vertical-align: top;
      }
    }
    .con{
      position: relative;
      .download{
        width:px2rem(450)
        height:px2rem(118)
        position: absolute;
        left: px2rem(150)
        top: px2rem(80)
      }
      .continue{
        position: absolute;
        top:px2rem(220)
        left:px2rem(210)
        width px2rem(320)
        height:px2rem(60)
      }
    }

  }
</style>
