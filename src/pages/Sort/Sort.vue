<template>
  <section class="sort">
    <Search/>
    <section class="main">
      <div class="main_left">
        <div class="inner">
          <ul class="inner_ul">
            <li class="inner_list active" v-for="(item,index) in datanav.categoryL1List" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="content_inner">
        <div class="content_img">
          <img src="" alt="">
        </div>
        <div class="content_header">
        </div>
        <div class="content_list">
          <ul class="list_item">
            <li class="list_item_li"></li>
            <div class="list_item_text"></div>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Search from './Search/Search.vue'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['datanav'])
    },
    mounted(){
      this.$nextTick(()=>{
        this.$store.dispatch('getDataNav')
        new BScroll('.inner',{
          click:true,
          scrollY:true,
        })
      })
    },
    components:{
      Search
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.sort
  width 100%
  height 100%
  .main
    width 100%
    height 100%
    background white
    .main_left
      width px2rem(162)
      border-right px2rem(3) solid #7e8c8d
      position: fixed;
      top px2rem(100)
      left 0
      bottom 0
      z-index 4
      .inner
        width 100%
        padding-top px2rem(40)
        overflow hidden
        .inner_ul
          width 100%
          height 400%
          .inner_list
            width 100%
            height px2rem(76)
            margin-bottom px2rem(20)
            border-left px2rem(7) solid #000
            border-radius px2rem(6)
            font-size px2rem(31)
            text-align center
            line-height px2rem(76)

</style>
