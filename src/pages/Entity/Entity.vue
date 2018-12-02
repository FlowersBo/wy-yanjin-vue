<template>
  <section id="entity">
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
    <!--轮播-->
    <div class="wrapper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ban,index) in datatopic.banner" :key="index">
            <a href="javascript:;"><img :src="ban.picUrl"></a>
            <div class="shade">
              <div class="shade_top">{{ban.subTitle}}</div>
              <div class="shade_center">{{ban.title}}</div>
              <div class="shade_bottom">{{ban.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--滑动-->
    <Article :column="datatopic.column"/>
    <Split/>
    <Recommend :recommend="datatopic.recommend" v-if="flag"/>
    <Split/>
    <!--滑动2-->
    <Topicality :tenfifteen="datatopic.tenfifteen"/>
    <Split/>
    <Look :zhen="datatopic.zhen" v-if="flag"/>
    <Split/>
    <div class="look_image">
      <div class="look_header">严选LOOK</div>
      <div class="look_images">
        <img v-lazy="datatopic.yxLook.picUrl" alt="" v-if="datatopic.yxLook">
      </div>
      <div class="text_top">
        <div class="user">
          <img v-lazy="datatopic.yxLook.avatar" alt="" v-if="datatopic.yxLook">
        </div>
        <div class="name" v-if="datatopic.yxLook">{{datatopic.yxLook.nickname}}</div>
      </div>
      <div class="comment" v-if="datatopic.yxLook">{{datatopic.yxLook.content}}</div>
    </div>
    <Split/>
    <More :findMore="datatopic.findMore"/>
    <div class="gotop">
      <div class="gotop_img"></div>
    </div>
  </section>
</template>

<script>
  import Article from './Article/Article.vue'
  import Recommend from './Recommend/Recommend.vue'
  import Topicality from './Topicality/Topicality.vue'
  import Look from './Look/Look.vue'
  import More from './More/More.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        flag:false
      }
    },
    computed:{
      ...mapState(['datatopic'])
    },
    mounted(){
      this.$store.dispatch('getDataTopic',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop:true,
            pagination: {
              el:'.swiper-pagination'
            },
          })
        })
      });
      setTimeout(()=>{
        this.flag = true
      },500)

    },
    components:{
      Article,
      Recommend,
      Topicality,
      Look,
      More
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  #entity
    width 100%
    height 100%
    .header
      position fixed
      width: 100%
      height px2rem(88)
      background-color #fafafa
      display flex
      justify-content space-between
      align-items center
      box-sizing border-box
      padding 0 px2rem(30)
      z-index 10
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
    .wrapper
      width 100%
      height px2rem(433)
      padding-top px2rem(105)
      .swiper-container
        width 100%
        height 100%
        box-sizing border-box
        padding 0 px2rem(30)

        .swiper-slide
          position relative
          width 90%
          height 90%
          box-sizing border-box
          border-right solid px2rem(15) #F4F4F4
          border-left solid px2rem(15) #F4F4F4
          img
            width 100%
            height 100%
          .shade
            width px2rem(450)
            height px2rem(200)
            background white
            position absolute
            opacity 0.8
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            box-sizing border-box
            padding px2rem(30) 0
            .shade_top
              font-size px2rem(20)
              color #7e8c8d
            .shade_center
              font-size px2rem(35)
              font-weight bold
            .shade_bottom
              font-size px2rem(25)
              color #333


    .look_image
      width 100%
      .look_header
        width 100%
        height px2rem(120)
        text-align center
        line-height px2rem(120)
        font-size px2rem(35)
      .look_images>img
        width px2rem(750)
        height px2rem(750)
      .text_top
        display flex
        align-items center
        width 100%
        margin-top px2rem(20)
        .user
          width px2rem(48)
          height px2rem(48)
          border-radius 50%
          img
            width 100%
            height 100%
            border-radius 50%
        .name
          font-size px2rem(20)
          margin-left px2rem(10)
      .comment
        width 100%
        box-sizing border-box
        padding 0 px2rem(30)
        font-size px2rem(28)
        color #7e8c8d
        margin-top px2rem(25)
        line-height 1.5
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
