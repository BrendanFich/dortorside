<template>
  <div class="countBtn">
    <el-button
      @touchstart.native="start"
      @touchmove.native="move"
      @touchend.native="end"
    >{{type}}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newValue: this.value
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
  watch: {
    type (val) {
      this.newValue = val
    }
  },
  methods: {
    changeBedParams () {
      if (this.type === '+') {
        this.newValue += 1
      }
      if (this.type === '-') {
        this.newValue -= 1
      }
    },
    start () {
      let self = this
      this.longClick = 0
      this.timeOutEvent = setTimeout(() => {
        self.longClick = 1
        self.intervalTimer = setInterval(() => {
          self.changeBedParams()
        }, 100)
      }, 200)
    },
    move (e) {
      clearInterval(this.intervalTimer)
      this.timeOutEvent = 0
      e.preventDefault()
    },
    end () {
      clearTimeout(this.timeOutEvent)
      clearInterval(this.intervalTimer)
      if (this.timeOutEvent !== 0 && this.longClick === 0) {
        this.changeBedParams()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.countBtn
</style>
