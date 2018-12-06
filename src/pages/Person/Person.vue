<template>
  <section id="login">
    <header class="header">
      <div class="header_left">
        <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      </div>
      <div class="header_center">网易严选</div>
      <div class="header_right">
        <i class="iconfont icon-fangdajing" @click="$router.replace('/sort')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/cart')"></i>
      </div>
    </header>
    <div class="login_methods" v-if="flag===0">
      <div class="content">
        <div class="content_img">
          <img src="../../assess/images/logo.png" alt="">
        </div>
        <div class="content_top" @click="gotophone">
          <i class="iconfont icon-shouji"></i>
          <span class="shouji" >手机号码登录</span>
        </div>
        <div class="content_center" @click="gotoems">
          <i class="iconfont icon-youjian"></i>
          <span class="youxiang" >邮箱账号登录</span>
        </div>
        <div class="content_bottom">
          <span class="text">手机号快速注册</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <footer class="footer">
        <div class="social">
          <i class="iconfont icon-wechat icon"></i>
          <span>微信</span>
        </div>
        <div class="social">
          <i class="iconfont icon-qq icon"></i>
          <span>QQ</span>
        </div>
        <div class="social actives">
          <i class="iconfont icon-weibo icon"></i>
          <span>微博</span>
        </div>
      </footer>
    </div>
    <div class="register" v-if="flag===1">
        <div class="register_img">
          <img src="../../assess/images/logo.png" alt="">
          <form class="form">
            <input type="text" maxlength="11"  placeholder="请输入手机号码"
                   v-model="phone"
                   class="register_top">
            <input type="text" placeholder="请输入短信验证码" class="register_bottom">
            <button class="code" :class="{code_color:isPhone}"
                    :disabled="!isPhone||timer>0"
                    @click.prevent="sendCode">
              {{timer>0 ? `已发送(${timer}s)` : '获取验证码'}}
            </button>
          </form>
          <div class="mistake" :class="{mistake_active:!isItem}">手机号码输入错误</div>
          <div class="matter">
            <div class="matter_left">遇到的问题?</div>
            <div class="matter_left">使用密码验证登录</div>
          </div>
          <div class="register_lodingo" @click="login">登录</div>
          <div class="register_lodinto" @click="gotomethods">其它账号登录</div>
          <div class="register_bottom">注册账号</div>
        </div>
    </div>
    <div class="register" v-if="flag===2">
      <div class="register_img">
        <img src="../../assess/images/logo.png" alt="">
        <div class="form">
          <input type="text" placeholder="邮箱账号" class="register_top">
          <input type="text" placeholder="密码" class="register_bottom">
        </div>
        <div class="matter">
          <div class="matter_left">注册账号</div>
          <div class="matter_left">忘记密码</div>
        </div>
        <div class="register_lodingo">登录</div>
        <div class="register_lodinto" @click="gotomethods">其它账号登录</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        flag:0 ,//0 登录方式 1 手机登录 2 邮箱登录
        phone:'',
        timer:0, //计时
        isItem:true
      }
    },
    methods: {
      gotophone(){
        this.flag = 1
      },
      gotoems(){
        this.flag = 2
      },
      gotomethods(){
        this.flag = 0
      },
      sendCode(){
        this.timer = 10
        const time = setInterval(() => {
          this.timer--
          if (this.timer <= 0) {
            this.timer = 0
            clearInterval(time)
          }
        }, 1000)
      },
      login(){
        let myreg = /^1\d{10}$/
        if (myreg.test(this.phone)) {
          this.isItem = true
        } else {
          this.isItem = false
        }
      }
    },
    computed:{
      isPhone(){
        let myreg=/^[1][0-9][0-9]{9}$/;
        return myreg.test(this.phone)
      },
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
   #login
     width 100%
     height: 100%
     background #F4F4F4
    .header
      width: 100%
      position fixed
      z-index 3
      height px2rem(88)
      display flex
      background-color #fafafa
      justify-content space-between
      align-items center
      box-sizing border-box
      padding 0 px2rem(30)
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
    .login_methods
      .content
        width 100%
        text-align center
        .content_img
          padding px2rem(170)  0
          img
            width px2rem(250)
            height px2rem(82)
        .content_top
          display inline-block
          width px2rem(668)
          height px2rem(88)
          background: #b4282d
          border-radius  px2rem(8)
          line-height px2rem(88)
          color white
          font-size  px2rem(30)
          margin-bottom px2rem(50)
          .icon-shouji
            font-size  px2rem(30)
        .content_center
          display inline-block
          width px2rem(668)
          height px2rem(88)
          border-radius  px2rem(8)
          border px2rem(2) solid #b4282d
          line-height px2rem(88)
          font-size  px2rem(30)
          color #b4282d
          margin-bottom px2rem(50)
          .icon-youjian
            font-size px2rem(30)
        .content_bottom
          font-size px2rem(25)
          .icon-arrow-right
            font-size px2rem(25)
      .footer
        width 100%
        position fixed
        bottom px2rem(100)
        margin auto
        display flex
        justify-content space-between
        box-sizing border-box
        padding 0 px2rem(100)
        .social
          font-size px2rem(30)
          color #7F7F7F
          padding-right px2rem(50)
          border-right px2rem(2) solid #7F7F7F
          .icon
            font-size px2rem(30)
        .actives
          border-right none
    .register
      width 100%
      height 100%
      text-align center
      background #fff
      .register_img>img
        width px2rem(186)
        height px2rem(62)
        margin px2rem(200) 0 0
      .form
        position relative
        input
          width 90%
          height px2rem(90)
          margin-top px2rem(30)
          font-size px2rem(33)
          border none
          outline none
          border-bottom px2rem(1) solid #ddd
        .code
          position absolute
          bottom px2rem(20)
          right px2rem(45)
          width px2rem(164)
          height px2rem(64)
          border px2rem(2) solid #b4282d
          text-align center
          line-height px2rem(64)
          border-radius px2rem(10)
          font-size px2rem(27)
          background #fff
          color #7e8c8d
          &.code_color
            color black
      .mistake
        font-size px2rem(30)
        color red
        margin px2rem(15) 0
        display none
        &.mistake_active
          display block
      .matter
        display flex
        justify-content space-between
        font-size px2rem(28)
        margin-top px2rem(30)
        box-sizing border-box
        padding 0 px2rem(42)
      .register_lodingo
        display inline-block
        margin-top px2rem(40)
        width px2rem(668)
        height px2rem(88)
        background: #b4282d
        border-radius  px2rem(8)
        line-height px2rem(88)
        color white
        font-size  px2rem(30)
        margin-bottom px2rem(50)
      .register_lodinto
        display inline-block
        width px2rem(668)
        height px2rem(88)
        border-radius  px2rem(8)
        border px2rem(2) solid #b4282d
        line-height px2rem(88)
        font-size  px2rem(30)
        color #b4282d
        margin-bottom px2rem(50)
      .register_bottom
        font-size px2rem(30)
</style>
