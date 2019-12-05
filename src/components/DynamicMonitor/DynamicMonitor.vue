<template>
  <div class="dynamicMonitor">
    <div class="mainLeft">
      <div class="title">病人列表</div>
      <ul class="list">
        <li v-for="(item, index) in patientList" :key="index" @click="select(index)" :class="{active: activeIndex === index}">
          <span class="name">{{item.name}}</span>
          <span class="age">{{item.age}}岁</span>
          <span class="updateTime">{{item.updateTime}}</span>
        </li>
      </ul>
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
      <li class="item" v-for="(item, index) in angleData" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="adjust">
          <el-button @click="item.value -= 1">-</el-button>
          <div class="value">{{item.value}}</div>
          <el-button @click="item.value += 1">+</el-button>
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
      angleData: [
        {
          name: '高度调节',
          value: 8
        },
        {
          name: '背板调节',
          value: 30
        },
        {
          name: '脚板调节',
          value: 30
        },
        {
          name: '倾斜调节',
          value: 30
        }
      ]
    }
  },
  methods: {
    select (index) {
      this.activeIndex = index
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
      padding: 0
      margin: 0
      height: calc(100% - 71px)
      background-color: $color-white
      border-radius: 0 0 15px 15px
      li
        height: 50px
        display: flex
        align-items: center
        justify-content: space-between
        .name
          display: inline-block
          width: 120px
          text-align: center
          @include font(24px, 800, $color-word-grey)
        .age
          display: inline-block
          width: 80px
          @include font(18px, 800, $color-word-grey)
        .updateTime
          width: 157px
          @include font(12px, 400, $color-word-grey)
      .active
        background: $color-primary
        .name,.age,.updateTime
          color: $color-white
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
