<template>
  <section class="special">
    <header class="special_header">
      <span class="special_header_text">专题精选</span>
      <i class="iconfont icon-yuanjiantou"></i>
    </header>
    <div class="swap">
      <div class="special_swap">
        <div class="special_content" v-for="(topic,index) in datahome.topicList" :key="index">
          <div class="special_top">
            <img v-lazy="topic.itemPicUrl" alt="">
          </div>
          <div class="special_center">
            <span>{{topic.title}}</span>
            <span>{{topic.priceInfo}}元起</span>
          </div>
          <div class="special_bottom">{{topic.subtitle}} </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.swap',{
          click:true,
          scrollX:true,
          preventDefault:false,
        })
      })
    },
    computed:{
      ...mapState(['datahome'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .special
    width 100%
    height px2rem(567)
    .special_header
      width 100%
      height px2rem(110)
      line-height px2rem(110)
      text-align center
      .special_header_text
        font-size px2rem(30)
        color #333
      .icon-yuanjiantou
        font-size px2rem(30)
        color #333

    .swap
      width 100%
      height px2rem(421)
      .special_swap
        width 260%
        overflow hidden
        height px2rem(421)
        display flex
        justify-content space-between
        margin-left px2rem(10)
        .special_content
          width px2rem(600)
          height px2rem(421)
          display flex
          flex-direction column
          justify-content space-between
          .special_top>img
            width px2rem(579)
            height px2rem(322)
            border-radius px2rem(15)
          .special_center
            font-size px2rem(30)
            display flex
            padding 0 px2rem(16)
          .special_bottom
            font-size px2rem(26)
            color #444
            padding-left px2rem(15)
</style>
