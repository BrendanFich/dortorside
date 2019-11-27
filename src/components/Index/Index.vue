<template>
  <div class="index">
    <div class="top">
      <div class="status">· 住院中</div>
      <div class="balance"><i class="icon-balance"></i>余额：<span>￥2000.00</span></div>
      <div class="time">
        <div class="clock">08:23:50</div>
        <div class="date">2019-06-02</div>
      </div>
      <img class="back" src="./img/back.png">
      <img class="home" src="./img/home.png">
    </div>
    <div class="main">
      <div class="mainLeft">
        <div class="number">
          <div class="bedNo">2035床</div>
          <div class="inHospitalNo">住院号：33215</div>
        </div>
        <div class="avatar"></div>
        <router-link tag="div" to='/dynamicMonitor' class="btn">
          <img class="btnIcon" src="./img/btnicon.png" alt="">
          <span class="btnText">动态监控</span>
        </router-link>
        <div class="notice">
          <img class="noticeIcon" src="./img/light.png" alt="">
          <span class="noticeText">三天后即将进行手术</span>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from '@/base/Menu/Menu'
export default {
  name: 'Index',
  data () {
    return {
      isShowMenu: false
    }
  },
  components: {
    Menu
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.index
  width: 100%
  height: 100vh
  position: relative
  background: url('~assets/background.png')
  .top
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 120px
    z-index: 1
    dispaly: flex
    justify-content: space-between
    align-items: center
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(255,255,255,0.3)
      filter: blur(1px)
      z-index: -1
    .status
      @include font(24px, 800, $color-word-blue)
      margin: 0 70px
      float: left
      height: 120px
      line-height: 120px
    .balance
      float: left
      height: 120px
      line-height: 120px
      @include font(24px, 800, $color-word-black)
      .icon-balance
        @include font(24px, 800, $color-word-black)
        margin-right: 8px
      span
        @include font(24px, 800, $color-money-red)
    .time
      float: right
      width: 210px
      height: 120px
      @include font(24px, 400, $color-white)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      line-height: 40px
    .back
      float: right
      width: 120px
      height: 120px
      cursor: pointer
    .home
      width: 120px
      height: 120px
      margin-right: 20px
      float: right
      cursor: pointer
  .main
    position: absolute
    top: 120px
    left: 0
    width: 100%
    margin-top: 50px
    .mainLeft
      float: left
      width: 370px
      height: 848px
      background-color: rgba(255,255,255,0.55)
      border-radius: 15px
      margin: 0 31px 0 66px
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      .number
        padding: 37px 30px 45px
        width: 300px
        height: 30px
        display: flex
        justify-content: space-between
        align-items: center
        .bedNo
          @include font(30px, 800, $color-word-blue)
        .inHospitalNo
          @include font(20px, 400, $color-word-black)
      .avatar
        width: 128px
        height: 128px
        background: $color-white
        border-radius: 50%
        margin-bottom: 64px
      .btn
        background: $color-btn-red
        width: 317px
        height: 60px
        @include font(24px, 800, $color-white)
        border-radius: 10px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        margin-bottom: 28px
        .btnIcon
          width: 36px
          margin-right: 22px
      .notice
        display: flex
        justify-content: center
        align-items: center
        @include font(24px, 400, $color-word-red)
        .btnIcon
          width: 33px
          margin-right: 10px
</style>
