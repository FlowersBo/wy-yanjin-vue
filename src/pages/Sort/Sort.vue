<template>
  <div>
    <Search/>
    <section class="sort">

      <section class="main">
        <div class="main_left">
          <div class="inner">
            <ul class="inner_ul">
              <li class="inner_list" v-for="(item,index) in datanav.categoryL1List"
                  :key="index"
                  @click="addActive(index)"
                  :class="{active:contentIndex===index}">
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="wrapper">
        <div class="wrapper-content">
          <div class="wrapper_content">
            <div class="content" v-for="(item,index) in dataNav.categoryL1List" :key="index"
                 v-if="index===contentIndex">
              <div class="content_inner">
                <div class="content_img">
                  <img v-lazy="item.bannerUrl" alt="">
                </div>
                <div class="content_header">-{{item.name}}分类-</div>
                <div class="list_item">
                  <ul class="content_list">
                    <li class="list_item_li" v-for="(sub,index) in item.subCateList" :key="index">
                      <div class="list_item_img">
                        <img  v-lazy="sub.bannerUrl||sub.wapBannerUrl" alt="">
                      </div>
                      <div class="list_item_text">{{sub.name}}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Search from './Search/Search.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        contentIndex:0,
        dataNav:{}
      }
    },
    computed:{
      ...mapState(['datanav'])
    },
    watch:{
      datanav (n,o){
        this.dataNav =n
      }
    },
    mounted(){
      this.$store.dispatch('getDataNav',()=>{
        this.$nextTick(()=>{
          new BScroll('.inner',{
            click:true,
            scrollY:true,
          })
           new BScroll('.wrapper-content',{
            scrollY: true,
            click: true,
          })
        })
      })
    },
    methods:{
      addActive(index){
        this.contentIndex=index
      }
    },
    components:{
      Search
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
  .listDetail
    margin-left px2rem(162)
    height px2rem(1104)
    background #fff
    &.anim
      animation animTop .8s
.sort
  width 100%
  background white
  padding-top px2rem(140)
  .main
    width px2rem(162)
    height 100%
    .main_left
      background white
      width px2rem(162)
      border-right px2rem(4) solid #ddd
      position: fixed;
      top px2rem(100)
      left 0
      bottom 0
      z-index 4
      padding-top px2rem(30)
      .inner
        width 100%
        height 100%
        overflow hidden
        .inner_ul
          width 100%
          height px2rem(1500)
          .inner_list
            width 100%
            height px2rem(76)
            margin-bottom px2rem(20)
            font-size px2rem(31)
            text-align center
            line-height px2rem(76)
            &.active
              border-left px2rem(8) solid #000
              color #b4282d
              font-weight bold
              font-size px2rem(38)
  .wrapper
    height 100%
    .wrapper-content
      height px2rem(1180)
      .content
        margin-left px2rem(166)
        background white
        .content_inner
          margin 0 px2rem(30)
          text-align center
          .content_img>img
            width  px2rem(518)
            height  px2rem(192)
          .content_header
            font-size px2rem(27)
            color #7e8c8d
            margin px2rem(30) 0
          .list_item
            width 100%
            .content_list
              width 100%
              clearFix()
              .list_item_li
                float left
                width  px2rem(144)
                height  px2rem(216)
                margin-right px2rem(29)
                .list_item_img>img
                  width  px2rem(144)
                  height  px2rem(144)
                .list_item_text
                  font-size px2rem(23)
                  overflow:hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap
</style>
