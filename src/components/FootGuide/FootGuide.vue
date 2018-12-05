<template>
  <footer class="footer">
    <a href="javascript:;" class="foot_item" :class="{on:$route.path.includes('/home')}" @click="goto('/home')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/entity'}" @click="goto('/entity')">
    <span class="item_icon">
      <i class="iconfont icon-hezi"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/sort'}" @click="goto('/sort')">
    <span class="item_icon">
      <i class="iconfont icon-classifi"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/cart'}" @click="goto('/cart')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/person'}" @click="goto('/person')">
    <span class="item_icon">
      <i class="iconfont icon-user"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
  methods:{
    ...mapState(['index']),
      goto(path){
        this.$router.replace(path)
      }
  },
  mounted(){
    console.log(this.index);
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer
    top-border-1px(#ccc)
    position fixed
    z-index 15
    bottom 0
    left 0
    right 0
    width 100%
    height px2rem(98)
    background #fff
    display flex
    .foot_item
      display flex
      flex-direction column
      align-items center
      flex 1
      font-size px2rem(24)
      margin px2rem(10)
      &.on
        color red
      .iconfont
        font-size px2rem(45)
      span
        margin-top px2rem(5)
</style>

