<template>
  <section id="home">
    <header class="header">
      <div class="head">
        <span class="logo">网易严选</span>
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="搜索商品，共998件好物" class="search">
      </div>
      <section class="nav">
        <ul class="list">
          <li class="nav_list" v-for="(arr,index) in datahome.headCateList" :key="index"
              @click="goto(index)" :class="{actives:isIndex === index}">{{arr.name}}
            <span class="underline"  :class="{active:isIndex === index}"></span>
          </li>
        </ul>
      </section>
    </header>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in datahome.focusList" :key="index">
          <a href="javascript:;"><img v-lazy="item.picUrl" class="swiper-lazy"> </a>
        </div>
      </div>
      <!-- 小圆点 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--服务-->
    <div class="brank">
      <div class="brank_text">
        <i class="iconfont icon-duigou"></i>
        <span class="text">网易自营品牌</span>
      </div >
      <div class="brank_text">
        <i class="iconfont icon-duigou"></i>
        <span class="text">30天无忧退货</span>
      </div>
      <div class="brank_text">
        <i class="iconfont icon-duigou"></i>
        <span class="text">48小时快速退货</span>
      </div>
    </div>
    <!--置顶-->
    <div class="gotop">
      <div class="gotop_img"></div>
    </div>
    <Split/>
    <!--品牌制造商直供-->
    <section class="merchant">
      <div class="merchant_item">
        <header class="headers">
          <span class="header_text">品牌制造商直供</span>
          <i class="iconfont icon-yuanjiantou"></i>
        </header>
        <ul class="merchant_list">
          <li class="list">
            <a href="javascript:;">
              <div class="merchant_text">
                <span class="text_top">新秀丽制造商</span>
                <span class="text_bottom">998元起</span>
              </div>
              <img src="./images/2.png" alt="">
            </a>
          </li>
          <li class="list">
            <a href="javascript:;">
              <div class="merchant_text">
                <span class="text_top">Nine West制造商</span>
                <span class="text_bottom">199元起</span>
              </div>
              <img src="./images/1.png" alt="">
            </a>
          </li>
          <li class="list">
            <a href="javascript:;">
              <div class="merchant_text">
                <span class="text_top">Nine West制造商</span>
                <span class="text_bottom">199元起</span>
              </div>
              <img src="./images/1.png" alt="">
            </a>
          </li>
          <li class="list">
            <a href="javascript:;">
              <div class="merchant_text">
                <span class="text_top">新秀丽制造商</span>
                <span class="text_bottom">998元起</span>
              </div>
              <img src="./images/2.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </section>
    <Split/>
    <TextRoll :itemList="datahome.newItemNewUserList"/>
    <Split/>
    <Countdown/>
    <Split/>
    <div class="welfare">
      <img src="../../assess/images/move.jpg" alt="">
    </div>
    <Split/>
    <Special/>
    <Split/>
    <HomeShop :datahome="datahome"/>
    <ShopBottom/>
    <Split/>
  </section>

</template>

<script>
  import TextRoll from '../../components/TextRoll/TextRoll.vue'
  import Countdown from '../../components/Countdown/Countdown.vue'
  import Special from '../../components/Special/Special.vue'
  import HomeShop from '../../components/HomeShop/HomeShop.vue'
  import ShopBottom from '../../components/ShopBottom/ShopBottom.vue'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data (){
      return {
        isIndex:0,
      }
    },
    mounted(){
      this.$store.dispatch('getDataHome',()=>{
        this.$nextTick(()=>{
          new BScroll('.nav',{
            click:true,
            scrollX:true,
            preventDefault:false,
          })
        })

        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop:true,
            lazyLoading: true,
            pagination: {
              el:'.swiper-pagination',

            },
          })
        })
      })
    },
    computed:{
      ...mapState(['datahome','datanav','datatopic']),
    },
    methods:{
      goto(index){
        this.isIndex = index
      },
    },
    components:{
      TextRoll,
      Countdown,
      Special,
      HomeShop,
      ShopBottom
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #home
    width 100%
    height 100%
    .header
      width 100%
      height px2rem(173)
      position fixed
      overflow hidden
      background white
      top 0
      z-index 10
      .head
        height 1rem
        padding px2rem(32)
        position relative
        .logo
          width px2rem(180)
          font-size px2rem(37)
          font-family: '\6977\4F53'
        .search
          position absolute
          top px2rem(30)
          right px2rem(20)
          width px2rem(525)
          height px2rem(60)
          background #ddd
          font-size px2rem(25)
          text-align center
          border-radius px2rem(6)
          border 0
          outline none
        .icon-fangdajing
          position absolute
          font-size px2rem(30)
          top 40%
          left 40%
          z-index 1

       /*导航*/
      .nav
        width 100%
        height px2rem(54)
        overflow hidden
        .list
          display flex
          align-items center
          width px2rem(1650)
          height px2rem(54)
          .nav_list
            flex 1
            font-size px2rem(30)
            text-align center
            position relative
            box-sizing border-box
            margin px2rem(20)
            padding-bottom px2rem(10)
            &.actives
              color red
            .underline
              position absolute
              bottom 0
              left 0
              right 0
              margin auto
              height px2rem(4)
              background #b4282d
              opacity 0
              &.active
                opacity 1
    /*轮播*/
    .swiper-container
      padding-top px2rem(173)
      width 100%
      height px2rem(400)
      .swiper-pagination :nth-child(n)
        width px2rem(40)
        height px2rem(10)
        border-radius px2rem(6)
        background #fff
        &.swiper-pagination-bullet-active
          background #ccc
      .swiper-slide img
        width 100%
        height 100%
    /*服务*/
    .brank
      width 100%
      height px2rem(72)
      font-size px2rem(26)
      display flex
      .brank_text
        flex 1
        text-align center
        line-height px2rem(72)
        .icon-duigou
          font-size px2rem(27)
    /*品牌直供*/
    .merchant
      width 100%
      height px2rem(620)
      background white
      .merchant_item
        .headers
          width 100%
          height px2rem(110)
          line-height px2rem(110)
          text-align center
          .header_text
            font-size px2rem(30)
            color #333
          .icon-yuanjiantou
            font-size px2rem(30)
            color #333
        .merchant_list
          clearFix()
          width 100%
          height 100%
          box-sizing border-box
          padding 0 0 0 px2rem(10)
          .list
            float left
            position relative
            box-sizing border-box
            margin px2rem(10)
            width 46.5%
            height 46.5%
            border 1px solid #999
            border-radius px2rem(8)
            .merchant_text
              position absolute
              top 0
              left 0
              color #000
              display flex
              flex-direction column
              margin px2rem(20)
              .text_top
                font-size px2rem(28)
              .text_bottom
                margin-top px2rem(15)
                font-size px2rem(28)
            img
              width 100%
              height 100%
    .welfare
      height px2rem(300)
    /*置顶*/
    .gotop
      position fixed
      bottom px2rem(118)
      right px2rem(15)
      width px2rem(100)
      height px2rem(100)
      border-radius 50%
      z-index 10
      background-image url("../../assess/images/goTop.png")
      background-repeat no-repeat
      background-size cover
</style>
