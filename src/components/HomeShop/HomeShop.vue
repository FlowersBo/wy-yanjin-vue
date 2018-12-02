<template>
  <div>
    <section class="shop" v-for="(list,index) in datahome.cateList" :key="index">
      <header class="shop_header">{{list.name}}</header>
      <ul class="shop_list">
        <li class="shop_li" v-for="(item,index) in list.itemList"  :key="index">
          <div class="shop_img">
            <img v-lazy="item.listPicUrl" alt="">
          </div>
          <div class="shop_top">趣味设计趣味设计趣味设计趣味设计</div>
          <div class="shop_center">跟我走</div>
          <div class="shop_bottom">￥39</div>
        </li>
      </ul>
      <Split/>
    </section>
  </div>
</template>

<script>
  export default {
    props:{
      datahome:Object
    },
    mounted(){

    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shop
    width 100%
    .shop_header
      width 100%
      height px2rem(120)
      font-size px2rem(30)
      text-align center
      line-height px2rem(120)
    .shop_list
      width 100%
      clearFix()
      .shop_li
        float left
        width px2rem(345)
        height px2rem(537)
        margin 0 px2rem(3) px2rem(10) px2rem(16)
        .shop_img>img
          width px2rem(345)
          height px2rem(345)
          background-color #f4f4f4
        .shop_top
          font-size px2rem(25)
          background-color: #f1ece2;
          color: #9f8a60;
          letter-spacing: 0;
          width px2rem(345)
          box-sizing border-box
          padding px2rem(25)
          margin-top px2rem(-4)
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        .shop_center
          font-size px2rem(28)
          color #333
          padding px2rem(20) px2rem(20) 0
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        .shop_bottom
          font-size px2rem(37)
          color #b4282d
          padding  px2rem(5) 0  0 px2rem(15)

</style>
