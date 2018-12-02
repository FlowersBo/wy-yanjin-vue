<template>
  <section class="more">
    <header class="More_header">更多精彩</header>
    <div class="more-brilliant" v-for="(item,index) in findMore" :key="index">
      <img v-lazy="item.itemPicUrl" alt="">
      <div class="more-brilliant_text">{{item.title}}</div>
      <Split/>
    </div>
  </section>
</template>

<script>
  export default {
    props:{
      findMore:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
  .more
    width 100%
    box-sizing border-box
    padding px2rem(30)
    background #f3f5f7
    margin-bottom px2rem(70)
    .More_header
      width 100%
      height px2rem(110)
      text-align center
    .more-brilliant
      text-align center
      width 100%
      background white
      img
        width px2rem(642)
        height px2rem(360)
        padding px2rem(23)
      .more-brilliant_text
        font-size px2rem(35)
        margin px2rem(25) 0
</style>
