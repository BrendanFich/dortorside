<template>
  <div class="index">
    <div class="top">
      <div class="status" v-if="$route.path.indexOf('patientInfo') !== -1">· 住院中</div>
      <div class="balance" v-if="$route.path.indexOf('patientInfo') !== -1">
        <i class="icon-balance"></i>余额：
        <span>￥2000.00</span>
      </div>
      <div class="pageTitle" v-for="(item, index) in nav" :key="index">
        <span v-if="$route.path.indexOf(item.path) !== -1">{{item.text}}</span>
      </div>
      <div class="time">
        <div class="clock">08:23:50</div>
        <div class="date">2019-06-02</div>
      </div>
      <i class="icon-back" @click="back"></i>
      <i class="icon-home" @click="home"></i>
    </div>
    <div class="main">
      <router-view></router-view>
      <div class="menu">
        <div class="mask" v-show="isShowMenu" @click="show($event)">
          <div class="content" ref="msk">
            <div class="mian">
              <div class="nav">
                <router-link
                  :to="item.path"
                  v-for="(item, index) in nav"
                  :key="index"
                  tag="el-button"
                  class="navBtn"
                  :class="{active: $route.path.indexOf(item.path) !== -1}"
                  @click.native="isShowMenu = false"
                >
                  <i :class="item.icon"></i>
                  <p>{{item.text}}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="menuBtn" @click="triggerMenu">
          <i class="icon-button"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      isShowMenu: false,
      nav: [
        {
          path: '/index/caseInquiry',
          icon: 'icon-record',
          text: '病例查询'
        },
        {
          path: '/index/medicalTechInquiry',
          icon: 'icon-medical-tech',
          text: '医技查询'
        },
        {
          path: '/index/voiceRecord',
          icon: 'icon-sound',
          text: '录音查询'
        },
        {
          path: '/index/feeInquiry',
          icon: 'icon-fee',
          text: '费用查询'
        },
        {
          path: '/index/docOrderInquiry',
          icon: 'icon-advice',
          text: '医嘱查询'
        },
        {
          path: '/index/signsInquiry',
          icon: 'icon-sign',
          text: '体征查询'
        },
        {
          path: '/index/patientSide',
          icon: 'icon-patient',
          text: '患者端'
        },
        {
          path: '/index/nurseSide',
          icon: 'icon-nurse',
          text: '护士端'
        },
        {
          path: '/index/careWorkerSide',
          icon: 'icon-worker',
          text: '护工端'
        }
      ]
    }
  },
  methods: {
    triggerMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    show (ev) {
      if (!this.$refs.msk.contains(ev.target)) {
        this.isShowMenu = false
      }
    },
    back () {
      this.$router.go(-1)
    },
    home () {
      this.$router.push('/index')
    }
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
  background: url('./background.png')
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
    .balance,.pageTitle
      float: left
      height: 120px
      line-height: 120px
      @include font(24px, 800, $color-word-black)
      .icon-balance
        @include font(24px, 800, $color-word-black)
        margin-right: 8px
      span
        @include font(24px, 800, $color-money-red)
    .pageTitle>span
      display: inline-block
      margin-left: 90px
      @include font(24px, 800, $color-word-blue)
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
    .icon-back
      float: right
      width: 120px
      height: 120px
      cursor: pointer
      line-height: 120px
      text-align: center
      color: $color-primary
      background-color: rgba(255,255,255,0.6)
    .icon-home
      width: 120px
      height: 120px
      margin-right: 20px
      float: right
      color: $color-white
      cursor: pointer
      line-height: 120px
      text-align: center
      background-color: $color-primary
  .main
    position: absolute
    top: 120px
    left: 0
    width: 100%
    .menu
      .mask
        position: fixed
        top: 0
        bottom: 0
        left: 0
        width: 100%
        background-color: rgba(0,0,0,.2)
        z-index: 101
        .content
          position: absolute
          top: 170px
          right: 103px
          float: left
          width: 1350px
          height: 848px
          border-radius: 15px
          overflow: hidden
          z-index: 1
          &:before
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            -webkit-filter: blur(10px)
            -moz-filter: blur(10px)
            -ms-filter: blur(10px)
            -o-filter: blur(10px)
            filter: blur(10px)
            z-index: -3
            background-image: url('./background.png')
          .mian
            padding: 44px 40px
            .nav
              float: left
              padding: 0
              .navBtn
                margin: 12px 19px
                float: left
                width: 147px
                height: 147px
                display: flex
                flex-direction: column
                justify-content: center
                align-items: center
                background-color: rgba(255,255,255,0.6)
                border-radius: 10px
                @include font(20px, 800, $color-word-blue)
                &:nth-child(7n+1)
                  margin-left: 0
                &:nth-child(7n)
                  margin-right: 0
                p
                  margin: 0
                i
                  display: inline-block
                  @include font(40px, 400, $color-word-blue)
                  margin-bottom: 15px
              .active
                color: $color-white
                background: $color-word-blue
                border-color: $color-word-blue
                i
                  color: $color-white
      .menuBtn
        width: 86px
        height: 86px
        line-height: 96px
        text-align: center
        background: $color-white
        color: $color-primary
        border-radius: 50%
        cursor: pointer
        position: fixed
        top: 975px
        right: 60px
        z-index: 101
</style>
