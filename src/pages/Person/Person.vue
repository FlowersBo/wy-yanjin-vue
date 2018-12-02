<template>
  <section id="login">
    <header class="header">
      <div class="header_left">
        <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      </div>
      <div class="header_center">网易严选</div>
      <div class="header_right">
        <i class="iconfont icon-fangdajing" @click="$router.replace('/cart')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/cart')"></i>
      </div>
    </header>
    <div class="content">
      <div class="content_img">
        <img src="../../assess/images/logo.png" alt="">
      </div>
      <div class="content_top">
        <i class="iconfont icon-shouji"></i>
        <span class="shouji">手机号码登录</span>
      </div>
      <div class="content_center">
        <i class="iconfont icon-youjian"></i>
        <span class="youxiang">邮箱账号登录</span>
      </div>
      <div class="content_bottom">
        <span class="text">手机号快速注册</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <footer class="footer">
      <div class="social">
        <i class="iconfont icon-wechat icon"></i>
        <span>微信</span>
      </div>
      <div class="social">
        <i class="iconfont icon-qq icon"></i>
        <span>QQ</span>
      </div>
      <div class="social actives">
        <i class="iconfont icon-weibo icon"></i>
        <span>微博</span>
      </div>
    </footer>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
 body
   background pink
   #user
     width 100%
     height: 100%
    .header
      width: 100%
      height px2rem(88)
      display flex
      background-color #fafafa
      justify-content space-between
      align-items center
      box-sizing border-box
      padding 0 px2rem(30)
      .header_center
        font-size px2rem(43)
        font-weight bold
        font-family: '\6977\4F53'
      .header_left
        .icon-shouye
          font-size px2rem(50)
      .header_right
        .icon-fangdajing
          font-size px2rem(45)
          margin-right px2rem(15)
        .icon-gouwuche
          font-size px2rem(48)
    .content
      width 100%
      text-align center
      .content_img
        margin px2rem(170) 0
        img
          width px2rem(250)
          height px2rem(82)
      .content_top
        display inline-block
        width px2rem(668)
        height px2rem(88)
        background: #b4282d
        border-radius  px2rem(8)
        line-height px2rem(88)
        color white
        font-size  px2rem(30)
        margin-bottom px2rem(50)
        .icon-shouji
          font-size  px2rem(30)
      .content_center
        display inline-block
        width px2rem(668)
        height px2rem(88)
        border-radius  px2rem(8)
        border px2rem(2) solid #b4282d
        line-height px2rem(88)
        font-size  px2rem(30)
        color #b4282d
        margin-bottom px2rem(50)
        .icon-youjian
          font-size px2rem(30)
      .content_bottom
        font-size px2rem(25)
        .icon-arrow-right
          font-size px2rem(25)
    .footer
      width 100%
      position fixed
      bottom px2rem(100)
      margin auto
      display flex
      justify-content space-between
      box-sizing border-box
      padding 0 px2rem(100)
      .social
        font-size px2rem(30)
        color #7F7F7F
        padding-right px2rem(50)
        border-right px2rem(2) solid #7F7F7F
        .icon
          font-size px2rem(30)
      .actives
        border-right none
</style>
