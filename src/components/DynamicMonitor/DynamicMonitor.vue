<template>
  <div class="dynamicMonitor">
    <div class="mainLeft">
      <div class="title">病人列表</div>
      <div class="list"></div>
    </div>
    <div class="mainMiddle">
      <div class="image"></div>
      <div class="btns">
        <el-button type="primary" class="btn">远程监控</el-button>
        <el-button type="primary" class="btn redBtn">心电图</el-button>
        <el-button type="primary" class="btn" disabled>历史监控</el-button>
        <el-button type="primary" class="btn" disabled>智能床状态</el-button>
      </div>
    </div>
    <ul class="mainRight">
      <li class="item">
        <div class="name">高度调节</div>
        <div class="adjust">
          <el-button>+</el-button>
          <div class="value">0</div>
          <el-button>-</el-button>
        </div>
      </li>
      <li class="item">
        <div class="name">背板调节</div>
        <div class="adjust">
          <el-button>+</el-button>
          <div class="value">30</div>
          <el-button>-</el-button>
        </div>
      </li>
      <li class="item">
        <div class="name">脚板调节</div>
        <div class="adjust">
          <el-button>+</el-button>
          <div class="value">30</div>
          <el-button>-</el-button>
        </div>
      </li>
      <li class="item">
        <div class="name">倾斜调节</div>
        <div class="adjust">
          <el-button>+</el-button>
          <div class="value">30</div>
          <el-button>-</el-button>
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
      isShowMenu: false
    }
  },
  methods: {
    triggerMenu () {
      this.isShowMenu = !this.isShowMenu
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
  .mainLeft
    float: left
    width: 370px
    height: 100%
    background-color: rgba(255,255,255,0.55)
    border-radius: 15px
    margin-left: 67px
    margin-right: 54px
    .title
      text-align: center
      line-height: 71px
      @include font(24px, 400, $color-word-grey)
    .list
      height: calc(100% - 71px)
      background-color: $color-white
      border-radius: 0 0 15px 15px
  .mainMiddle
    float: left
    width: 805px
    height: 100%
    background-color: rgba(255,255,255,0.55)
    border-radius: 15px
    margin-right: 49px
    .image
      width: 733px
      height: 435px
      background-color: $color-white
      border-radius: 15px
      margin-top: 32px
      margin-left: 36px
      margin-bottom: 60px
    .btns
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: space-between
      width: 692px
      height: 169px
      margin-left: 60px
      .btn
        margin: 0
        width: 317px
        height: 60px
        @include font(24px, 800, $color-white)
        border-radius: 10px
      .redBtn
        background: $color-btn-red
        border-color: $color-btn-red
  .mainRight
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
      .el-button
        @include font(24px, 800, $color-white)
        background: $color-btn-blue
        width: 60px
        height: 60px
        border-radius: 10px
</style>
