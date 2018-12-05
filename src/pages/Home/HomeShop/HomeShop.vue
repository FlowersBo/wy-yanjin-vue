<template>
  <div>
    <section class="shop" v-if="newCateList[indexs]">
      <header class="shop_header">{{newCateList[indexs].name}}</header>
      <!--<img :src="list.bannerUrl" alt="">-->
      <ul class="shop_list">
        <li class="shop_li" v-for="(item,index) in newCateList[indexs].itemList"  :key="index">
          <div class="shop_img">
            <img :src="item.listPicUrl" alt="" :timer="timer">
          </div>
          <div class="shop_top">{{item.simpleDesc}}</div>
          <div class="shop_center">{{item.name}}</div>
          <div class="shop_bottom">￥{{item.retailPrice}}</div>
        </li>
      </ul>
      <Split/>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        indexs:1,
        newCateList:[]
      }
    },
    mounted(){
      this.newCateList = this.datahome.cateList
      if(this.$route.params.index){
        this.indexs = this.$route.params.index
      }
    },
    computed:{
      ...mapState(['datahome']),
      indexParams(){
        this.indexs = this.$route.params.index
      },
      timer(){
        return Date.now()
      }
    },
    methods:{
     /* pushWatch(id){
        this.$router.push(`/home/message/detail/${id}`)
      },*/

    },
    watch:{
      indexParams(){
        this.indexs = this.$route.params.index
      },
      datahome(){
        this.newCateList = this.datahome.cateList
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .shop
    width 100%
    padding-top px2rem(170)
    .shop_header
      width 100%
      height px2rem(120)
      font-size px2rem(30)
      text-align center
      line-height px2rem(120)
    .shop_list
      width 100%
      clearFix()
      .shop_li
        float left
        width px2rem(345)
        height px2rem(537)
        margin 0 px2rem(3) px2rem(10) px2rem(16)
        .shop_img>img
          width px2rem(345)
          height px2rem(345)
          background-color #f4f4f4
        .shop_top
          font-size px2rem(25)
          background-color: #f1ece2;
          color: #9f8a60;
          letter-spacing: 0;
          width px2rem(345)
          box-sizing border-box
          padding px2rem(25)
          margin-top px2rem(-4)
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        .shop_center
          font-size px2rem(28)
          color #333
          padding px2rem(20) px2rem(20) 0
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        .shop_bottom
          font-size px2rem(37)
          color #b4282d
          padding  px2rem(5) 0  0 px2rem(15)

</style>
