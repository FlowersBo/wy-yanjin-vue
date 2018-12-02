<template>
  <section class="recommend">
    <div class="recommend_warp">
      <header class="recommend_header" v-if="recommend.name">{{recommend.name}}</header>
      <div class="recommend_top" v-for="(item,index) in one" :key="item.priceInfo">
        <div class="recommend_top_img">
          <img v-lazy="item.picUrl" alt="">
        </div>
        <div class="recommend_top_text">
          <span>{{item.nickname}}</span>
          <span>{{item.priceInfo}}元</span>
        </div>
        <div class="recommend_top_bottom">{{item.subTitle}}</div>
      </div>
      <div class="recommend_center" v-for="(item,index) in two" :key="item.priceInfo">
        <div class="recommend_center_left">
          <div class="text_top">
            <div class="user">
              <img v-lazy="item.avatar" alt="">
            </div>
            <div class="name">{{item.nickname}}</div>
          </div>
          <div  class="text_center">{{item.title}}</div>
          <div  class="text_bottom">{{item.subTitle}}</div>
        </div>
        <div class="recommend_center_right">
          <img v-lazy="item.picUrl" alt="">
          <div class="recommend_center_right_text">{{item.typeName}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props:{
      recommend:Object
    },
    computed:{
      one(){
         const {Item} =this.recommend
         let result =[];
         Item.forEach((item,index)=>{
           if(index ===0){
             result.push(item)
           }
         })
         return result
      },
      two(){
          const {Item} =this.recommend
          let result =[];
          Item.forEach((item,index)=>{
            if(index !==0){
              result.push(item)
            }
          })
          return result
        }
      },
    watch:{

    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
  .recommend
    width 100%
    height 100%
    background white
    .recommend_warp
      width 100%
      height px2rem(1435)
      box-sizing border-box
      padding 0 px2rem(30)
      .recommend_header
        width 100%
        height px2rem(120)
        font-size px2rem(40)
        text-align center
        line-height px2rem(120)

      .recommend_top
        width 100%
        height px2rem(520)
        .recommend_top_img
          width 100%
          height px2rem(386)
          img
            width 100%
            height 100%
        .recommend_top_text
          margin-top px2rem(30)
          font-size px2rem(40)
          display flex
          justify-content space-between
          padding 0 px2rem(30)
        .recommend_top_bottom
          font-size px2rem(26)
          padding-top px2rem(30)
          color #7e8c8d
      .recommend_center
        display flex
        justify-content space-between
        box-sizing border-box
        padding px2rem(20)
        margin-top  px2rem(30)
        width 100%
        height px2rem(300)
        .recommend_center_left
          width px2rem(300)
          height px2rem(300)
          overflow hidden
          .text_top
            display flex
            align-items center
            width 100%
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
          .text_center
            font-size px2rem(35)
            overflow: hidden;
            text-overflow ellipsis
            white-space nowrap
            margin  px2rem(20) 0
          .text_bottom
            font-size px2rem(25)
            color #7e8c8d
            letter-spacing px2rem(3)
            line-height 1.5
        .recommend_center_right
          position relative
          width px2rem(300)
          height px2rem(300)
          img
            width 100%
            height 100%
          .recommend_center_right_text
            position absolute
            left px2rem(15)
            top px2rem(30)
            height px2rem(30)
            line-height px2rem(30)
            font-size px2rem(25)
            padding px2rem(7)
            background-color rgba(255, 255, 255, 0.9)
            border: 1px solid #d9d9d9
            border-radius px2rem(30)
            color #333
</style>
