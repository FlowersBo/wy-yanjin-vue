<template>
  <section id="cart">
    <header class="header">
      <span>购物车</span>
      <span class="cart_right">领券</span>
    </header>
    <ul class="cart_item">
      <li class="cart_content">
        <i class="iconfont icon-circle"></i>
        <span class="cart_text">30天无忧退货</span>
      </li>
      <li class="cart_content">
        <i class="iconfont icon-circle"></i>
        <span class="cart_text">48小时快速退款</span>
      </li>
      <li class="cart_content">
        <i class="iconfont icon-circle"></i>
        <span class="cart_text">满88元免邮费</span>
      </li>
    </ul>
    <div class="cart_img">
      <img src="../../assess/images/cart.png" alt="">
      <span class="cart_img_text">去添加点什么吧</span>
    </div>
    <button class="btn" @click="$router.replace('./person')">登录</button>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  #cart
    position relative
    width 100%
    height 100%
    background #f4f4f4
    .header
      position relative
      width 100%
      color #666
      height px2rem(88)
      background white
      text-align center
      line-height px2rem(88)
      font-size px2rem(37)
      .cart_right
        position absolute
        font-size px2rem(34)
        right px2rem(60)
    .cart_item
      width 100%
      display flex
      justify-content space-between
      box-sizing border-box
      padding px2rem(30)  px2rem(30) 0
      .cart_content
        display flex
        align-items center
        color #666
        .cart_text
          font-size px2rem(25)


    .cart_img
      text-align center
      img
        position absolute
        top px2rem(500)
        left 50%
        transform translateX(-50%)
      .cart_img_text
        font-size px2rem(30)
        color #666
        position absolute
        top px2rem(750)
        transform translateX(-50%)
    .btn
      position absolute
      text-align center
      width px2rem(480)
      height px2rem(92)
      background red
      top px2rem(800)
      left 50%
      transform translateX(-50%)
      font-size px2rem(45)
      font-weight bold
      border-radius px2rem(6)
      color white
</style>
