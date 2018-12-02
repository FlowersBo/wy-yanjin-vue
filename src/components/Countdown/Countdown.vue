<template>
  <section id="countdown">
    <div class="countdown_date">
      <span class="countdown_date_top">严选限时购</span>
      <div class="countdown_date_center">
        <span class="timer">12</span>
        <span class="symbol">:</span>
        <span class="timer">12</span>
        <span class="symbol">:</span>
        <span class="timer">12</span>
      </div>
      <span class="countdown_date_bottom">下一场 22:00 开始</span>
    </div>
    <div class="countdown_img">
      <img  src="../../assess/images/test2.png" alt="img">
      <div class="money">
        <span class="money_text">￥42</span>
        <span class="money_text">￥49</span>
      </div>
    </div>
  </section>

</template>

<script>
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  #countdown
    width 100%
    height px2rem(320)
    padding  px2rem(50)
    box-sizing border-box
    display flex
    justify-content space-between
    margin px2rem(-30) 0 px2rem(25)
    .countdown_date
      width px2rem(240)
      height px2rem(221)
      margin-top px2rem(40)
      text-align center
      display flex
      flex-direction column
      justify-content space-between
      .countdown_date_top
        font-size px2rem(38)
        color #444
        letter-spacing px2rem(5)
      .countdown_date_center
        display flex
        justify-content space-between
        align-items center
        padding 0 px2rem(8)
        .timer
          width px2rem(62)
          height px2rem(56)
          line-height px2rem(56)
          font-size px2rem(37)
          color white
          text-align center
          background #444
          border-radius px2rem(6)
        .symbol
          font-size px2rem(30)
      .countdown_date_bottom
        font-size px2rem(25)
        color #444
    .countdown_img
      position relative
      width px2rem(320)
      height px2rem(320)
      img
        width 100%
        height 100%
      .money
        position absolute
        bottom  px2rem(40)
        right  0
        display flex
        flex-direction column
        justify-content center
        align-items center
        width px2rem(96)
        height px2rem(96)
        border-radius 50%
        background-color rgba(244,143,24,0.95)
        .money_text
          font-size px2rem(25)
          color white
</style>
