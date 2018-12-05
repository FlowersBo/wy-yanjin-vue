<template>
  <div class="article">
    <div class="article_content">
      <div class="article_content_li" v-for="(item,index) in column" :key="index">
        <div class="article_content_img">
          <img v-lazy="item.picUrl" alt="">
          <div class="text_top"><span class="text_top_item">{{item.articleCount}}</span></div>
        </div>
        <div class="text_bottom">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      column:Array
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.article',{
          click:true,
          scrollX:true,
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
  .article
    width 100%
    height px2rem(270)
    background white
    overflow hidden
    .article_content
      width 200%
      display flex
      text-align center
      .article_content_img
        position relative
        margin px2rem(30) 0 px2rem(15)  px2rem(20)
        img
          width px2rem(164)
          height px2rem(164)
        .text_top
          position absolute
          color white
          width 70%
          height px2rem(35)
          text-align right
          font-size px2rem(25)
          top px2rem(4)
          right 0
          background url("./img/bg.png")
          .text_top_item
            position absolute
            top px2rem(4)
            right px2rem(5)
            width px2rem(164)
      .text_bottom
        font-size px2rem(27)
        color #333
</style>
