<template>
  <!--文字&滚动图-->
  <section class="text_roll">
    <div class="header_item">
      <span class="header_item_top">新品首发</span>
      <div class="header_item_bottom">
        <span class="header_item_text">查看全部</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <div class="rollWrapper">
      <ul class="roll_list">
        <li class="roll_li"  v-for="(item,index) in itemList" :key="item.id">
          <div class="roll_item-top" >
            <img class="roll_img" v-lazy="item.primaryPicUrl" alt="img">
          </div>
          <div class="roll_item_bottom">
            <span class="roll_top">{{item.name}}</span><br>
            <span class="roll_center">{{item.simpleDesc}}</span><br>
            <span class="roll_bottom">￥{{item.retailPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      itemList: Array,
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.rollWrapper',{
          click:true,
          scrollX:true,
          scrollY:false,
          preventDefault:false,
        })
    })
    },
    methods:{

    },
    computed:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  /*文字&滚动图*/
  .text_roll
    width 100%
    height px2rem(732)
    padding-bottom px2rem(40)
    /*background pink*/
    .header_item
      display flex
      flex-direction column
      align-items center
      justify-content center
      width 100%
      height px2rem(260)
      text-align center
      background-image url("../../assess/images/new.png")
      margin-bottom px2rem(30)
      .header_item_top
        font bold px2rem(40) '宋体'
        color #8ba0b6
        margin-bottom px2rem(15)
      .header_item_bottom
        display inline-block
        width px2rem(240)
        height px2rem(56)
        background #d8e5f1
        .header_item_text
          font-size px2rem(29)
          color #8ba0b6
        .icon-arrow-right
          font-size px2rem(29)
          color #8ba0b6
    .rollWrapper
      width 100%
      height px2rem(440)
      padding-left px2rem(25)
      overflow hidden
      .roll_list
        width 350%
        height px2rem(440)
        margin-top px2rem(20)
        display flex
        .roll_li
          flex 1
          width px2rem(280)
          height 100%
          .roll_item-top
            width px2rem(280)
            height px2rem(280)
            background #f3f5f7
            .roll_img
              width 100%
              height 100%
          .roll_item_bottom
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            .roll_top
              font-size px2rem(28)
            .roll_center
              font-size px2rem(20)
            .roll_bottom
              font-size px2rem(30)
</style>
