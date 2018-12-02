<template>
  <div class="shopbottom">
    <div class="shopbottom_text">
      <div class="shopbottom_text_top">下载APP</div>
      <div class="shopbottom_text_top">电脑版</div>
    </div>
    <div class="copyright">
      <span class="copyright_text">网易公司版权所有 © 1997-2018</span>
      <span class="copyright_text">食品经营许可证：JY13301080111719</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shopbottom
    width 100%
    height px2rem(246)
    border-top 1px solid rgba(0,0,0,0.15)
    background-color #414141
    border-top 1px solid rgba(0,0,0,0.15)
    text-align center
    display flex
    flex-direction column
    justify-content center
    padding-bottom px2rem(98)
    .shopbottom_text
      width px2rem(710)
      height px2rem(63)
      font-size px2rem(30)
      display flex
      justify-content center
      margin-bottom px2rem(40)
      .shopbottom_text_top
        font-size px2rem(28)
        width px2rem(172)
        height px2rem(62)
        color white
        border px2rem(2) solid #999
        line-height px2rem(62)
        margin 0 px2rem(30)
    .copyright
      display flex
      flex-direction column
      font-size px2rem(25)
      color #999
      span
        padding px2rem(6) 0
</style>
