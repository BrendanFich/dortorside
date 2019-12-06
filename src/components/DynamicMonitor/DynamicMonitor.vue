<template>
  <div class="dynamicMonitor">
    <div class="left">
      <div class="content">
        <div class="bed">
          <img
            src="./img/middleLeft.png"
            class="middleLeft"
            :style="`transform: translate(0, -${height*3}px) rotate(-${footerAngle}deg)`"
          />
          <img
            src="./img/middleRight.png"
            class="middleRight"
            :style="`transform: translate(0, -${height*3}px) rotate(${footerAngle}deg)`"
          />
          <img src="./img/middleUnder.png" class="middleUnder" />
          <img
            src="./img/head.png"
            class="head"
            :style="`transform: translate(0, -${height*3}px) rotate(-${backAngle}deg)`"
          />
          <img src="./img/headUnder.png" class="headUnder" />
          <img src="./img/foot.png" class="foot" :style="`transform: translate(0, -${height*3}px)`" />
        </div>
      </div>
      <div class="btns">
        <el-button type="primary" class="btn">远程监控</el-button>
        <el-button type="primary" class="btn redBtn">心电图</el-button>
        <el-button type="primary" class="btn" disabled>历史监控</el-button>
        <el-button type="primary" class="btn" disabled>智能床状态</el-button>
      </div>
    </div>
    <ul class="right">
      <li class="item">
        <div class="name">高度调节</div>
        <div class="adjust">
          <div class="fakeBtn"
            @mousedown="start"
            @mousemove="move"
            @mouseup="end('height')"
          >-</div>
          <div class="value">{{height}}</div>
          <div class="fakeBtn" @click="height += 1">+</div>
        </div>
      </li>
      <li class="item">
        <div class="name">背板调节</div>
        <div class="adjust">
          <div class="fakeBtn"
            @mousedown="start"
            @mousemove="move"
            @mouseup="end('backAngle')"
          >-</div>
          <div class="value">{{backAngle}}</div>
          <div class="fakeBtn" @click="backAngle += 1">+</div>
        </div>
      </li>
      <li class="item">
        <div class="name">脚板调节</div>
        <div class="adjust">
          <div class="fakeBtn"
            @mousedown="start"
            @mousemove="move"
            @mouseup="end('footerAngle')"
          >-</div>
          <div class="value">{{footerAngle}}</div>
          <div class="fakeBtn" @click="footerAngle += 1">+</div>
        </div>
      </li>
      <li class="item">
        <div class="name">倾斜调节</div>
        <div class="adjust">
          <div class="fakeBtn"
            @mousedown="start"
            @mousemove="move"
            @mouseup="end('tiltAngle')"
          >-</div>
          <div class="value">{{tiltAngle}}</div>
          <div class="fakeBtn" @click="tiltAngle += 1">+</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      activeIndex: 0,
      isShowMenu: false,
      longClick: 0,
      timeOutEvent: 0,
      intervalTimer: null,
      patientList: [
        {
          name: '周秀娜',
          age: '28',
          updateTime: '2019-02-20'
        },
        {
          name: '周秀娜',
          age: '28',
          updateTime: '2019-02-20'
        },
        {
          name: '周秀娜',
          age: '28',
          updateTime: '2019-02-20'
        }
      ],
      height: 0,
      backAngle: 0,
      footerAngle: 0,
      tiltAngle: 0
    }
  },
  created () {},
  methods: {
    select (index) {
      this.activeIndex = index
    },
    start () {
      console.log('----start----')
      let self = this
      this.longClick = 0
      this.timeOutEvent = setTimeout(function () {
        self.longClick = 1
        self.intervalTimer = setInterval(() => {
          console.log('长按')
        }, 300)
      }, 500)
    },
    move: function (e) {
      console.log('----move----')
      console.log(this.intervalTimer)
      clearInterval(this.intervalTimer)
      this.timeOutEvent = 0
      e.preventDefault()
    },
    end (itemName) {
      let self = this
      console.log('----end----')
      clearTimeout(this.timeOutEvent)
      clearInterval(this.intervalTimer)
      if (this.timeOutEvent !== 0 && this.longClick === 0) {
        switch (itemName) {
          case 'height':
            self.height -= 1
            break
          case 'backAngle':
            self.backAngle -= 1
            break
          case 'footerAngle':
            self.footerAngle -= 1
            break
        }
      }
      return false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.dynamicMonitor
  margin-top: 50px
  width: 100%
  height: 848px
  .left
    float: left
    width: 1229px
    height: 100%
    background-color: rgba(255,255,255,0.55)
    border-radius: 15px
    margin-right: 49px
    margin-left: 67px
    .content
      width: 1157px
      height: 635px
      background-color: $color-white
      border-radius: 15px
      margin-top: 32px
      margin-left: 36px
      margin-bottom: 60px
    .bed
      position: relative
      overflow: hidden
      height: 100%
      background-color: rgba(80, 121, 237, 0.7)
      border-radius: 15px
      .foot
        width: 635px
        position: absolute
        top: 150px
        left: 150px
      .middleLeft
        width: 580px
        position: absolute
        transform-origin: 27px 258px
        top: 50px
        left: 200px
      .middleRight
        width: 580px
        position: absolute
        top: 50px
        left: 170px
        transform-origin: 554px 258px
      .middleUnder
        width: 687px
        position: absolute
        top: 338px
        left: 170px
      .head
        width: 556px
        position: absolute
        top: 64px
        left: 490px
        transform-origin: center center
      .headUnder
        width: 144px
        position: absolute
        top: 314px
        left: 770px
    .btns
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      align-items: space-between
      height: 169px
      .btn
        margin: 0
        width: 211px
        height: 60px
        @include font(24px, 800, $color-white)
        border-radius: 10px
      .redBtn
        background: $color-btn-red
        border-color: $color-btn-red
  .right
    float: left
    width: 474px
    height: calc(100% - 53px)
    background-color: rgba(255,255,255,0.55)
    border-radius: 15px
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    margin: 0
    padding: 0
    padding-top: 53px
    .item
      text-align: center
      @include font(24.9px, 800, $color-primary)
      height: 156px
    .name
      margin-bottom: 30px
    .adjust
      display: flex
      justify-content: center
      align-items: center
      .value
        width: 127px
        text-align: center
        @include font(46.24px, 800, $color-primary)
      .fakeBtn
        @include font(24px, 800, $color-white)
        background: $color-btn-blue
        width: 60px
        height: 60px
        line-height: 60px
        border-radius: 10px

</style>
