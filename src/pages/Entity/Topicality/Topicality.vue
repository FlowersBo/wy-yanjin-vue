<template>
  <div class="topicality">
    <header class="topicality_header">
      十点一刻
    </header>
    <div class="Wrap">
      <div class="topicWrap">
        <div class="topic" v-for="(item,index) in tenfifteen" :key="index">
          <div class="topic_header">-今日话题-</div>
          <div class="topic_top">{{item.title}}</div>
          <div class="topic_center">{{item.desc}}</div>
          <div class="topic_bottom">{{item.participantNum}}人参与话题</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      tenfifteen:Array
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.Wrap',{
          click:true,
          scrollX:true,
          preventDefault:false,
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .topicality
    width 100%
    height px2rem(600)
    box-sizing border-box
    padding px2rem(30)
    .topicality_header
      width 100%
      height px2rem(120)
      text-align center
      line-height px2rem(120)
      font-size px2rem(35)
    .topicWrap
      width 270%
      height 100%
      overflow hidden
      display flex
      box-sizing border-box
      .topic
        flex 1
        display  flex
        flex-direction column
        align-items center
        justify-content space-between
        box-sizing border-box
        padding px2rem(60) 0
        width px2rem(500)
        height px2rem(400)
        background-image url("../../../assess/images/qipao.png")
        background-repeat no-repeat
        .topic_header
          font-size px2rem(25)
          color #7e8c8d
        .topic_top
          font-size px2rem(35)
        .topic_center
          font-size px2rem(30)
          margin-bottom px2rem(50)
        .topic_bottom
          font-size px2rem(25)
          color #7e8c8d
          margin-bottom px2rem(50)

</style>
