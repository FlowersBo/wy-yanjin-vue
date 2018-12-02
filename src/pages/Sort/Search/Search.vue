<template>
  <div class="head">
    <i class="iconfont icon-fangdajing"></i>
    <input type="text" placeholder="搜索商品，共998件好物" class="search">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
.head
  width 100%
  height px2rem(60)
  padding px2rem(20)
  position fixed
  z-index 10
  background white
  border-bottom px2rem(4) solid #ddd
  .search
    width px2rem(700)
    height px2rem(55)
    background #ddd
    font-size px2rem(25)
    text-align center
    border-radius px2rem(6)
    border 0
    outline none
    margin-bottom px2rem(17)
  .icon-fangdajing
    position absolute
    font-size px2rem(30)
    top 37%
    left 25%
    z-index 1

</style>
