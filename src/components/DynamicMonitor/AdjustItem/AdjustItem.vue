<template>
  <div class="adjustItem">
    <div class="name">{{itemName}}</div>
    <div class="adjust">
      <el-button
        @touchstart.native="start(type, '-')"
        @touchmove.native="move"
        @touchend.native="end(type, '-')"
      >-</el-button>
      <div class="value">{{value}}</div>
      <el-button
        @touchstart.native="start(type, '+')"
        @touchmove.native="move"
        @touchend.native="end(type, '+')"
      >+</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    itemName: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    changeBedParams (itemName, type) {
      if (type === '+') {
        switch (itemName) {
          case 'height':
            this.height += 1
            break
          case 'backAngle':
            this.backAngle += 1
            break
          case 'footerAngle':
            this.footerAngle += 1
            break
          case 'tiltAngle':
            this.tiltAngle += 1
            break
        }
      }
      if (type === '-') {
        switch (itemName) {
          case 'height':
            this.height -= 1
            break
          case 'backAngle':
            this.backAngle -= 1
            break
          case 'footerAngle':
            this.footerAngle -= 1
            break
          case 'tiltAngle':
            this.tiltAngle -= 1
            break
        }
      }
    },
    start (itemName, type) {
      let self = this
      this.longClick = 0
      this.timeOutEvent = setTimeout(() => {
        self.longClick = 1
        self.intervalTimer = setInterval(() => {
          self.changeBedParams(itemName, type)
        }, 100)
      }, 200)
    },
    move (e) {
      clearInterval(this.intervalTimer)
      this.timeOutEvent = 0
      e.preventDefault()
    },
    end (itemName, type) {
      clearTimeout(this.timeOutEvent)
      clearInterval(this.intervalTimer)
      if (this.timeOutEvent !== 0 && this.longClick === 0) {
        this.changeBedParams(itemName, type)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.adjustItem
  .el-button
    @include font(24px, 800, $color-white)
    background: $color-btn-blue
    width: 60px
    height: 60px
    line-height: 60px
    border-radius: 10px
</style>
