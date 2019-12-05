<template>
  <div class="patientInfo">
    <div class="number">
      <div class="bedNo">2035床</div>
      <div class="inHospitalNo">住院号：33215</div>
    </div>
    <div class="avatar"></div>
    <router-link tag="div" to='/index/dynamicMonitor' class="btn">
      <i class="icon-monitor"></i>
      <span class="btnText">动态监控</span>
    </router-link>
    <div class="notice">
      <i class="icon-tip"></i>
      <span class="noticeText">三天后即将进行手术</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.patientInfo
  float: left
  width: 370px
  height: 848px
  background-color: rgba(255,255,255,0.55)
  border-radius: 15px
  margin: 50px 31px 0 66px
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
    line-height: 24px
    border-radius: 10px
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    margin-bottom: 28px
    .icon-monitor
      font-size: 36px
      margin-right: 18px
  .notice
    display: flex
    justify-content: center
    align-items: center
    @include font(24px, 400, $color-word-red)
    .icon-tip
      font-size: 36px
      margin-right: 10px
</style>
