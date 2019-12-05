<template>
  <div class="caseInquiry">
    <div class="content">
      <el-menu
        class="left"
        default-active="3-2"
        background-color="transparent"
        text-color="#000"
        active-text-color="#5079EDFF"
        :collapse-transition="false"
      >
        <el-menu-item index="1">病案首页</el-menu-item>
        <el-menu-item index="2">入院记录</el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <span>病程记录</span>
          </template>
          <el-menu-item index="3-1">查房记录</el-menu-item>
          <el-menu-item index="3-2">首次病情记录</el-menu-item>
          <el-menu-item index="3-3">日常病情记录</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">手术记录</el-menu-item>
        <el-menu-item index="5">护理记录</el-menu-item>
        <el-menu-item index="6">护理文书</el-menu-item>
      </el-menu>
      <div class="right">
        <ul>
          <li v-for="(item, index) in recordInfo" :key="index">
            <span class="key">{{item.key}}：</span>
            {{item.value}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      recordInfo: [
        { key: '入院日期', value: '2019-02-25' },
        { key: '住院号码', value: '145125' },
        { key: '性质', value: '医保' },
        { key: '姓名', value: '1号病患' },
        { key: '主治医生', value: '陈教授' },
        { key: '预交款', value: '10000元' },
        { key: '性别', value: '男' },
        { key: '科室', value: '骨外科' },
        { key: '费用总额', value: '100000元' },
        { key: '年龄', value: '24' },
        { key: '过敏信息', value: '无' },
        { key: '余额', value: '-11110元' },
        { key: '出生年月', value: '1992-02-14' },
        { key: '诊断', value: '小腿骨折' },
        { key: '血型', value: 'O' },
        { key: '饮食情况', value: '良好' },
        { key: '病人情况', value: '一般' },
        { key: '护理级别', value: '2级' }
      ]
    }
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
.caseInquiry
  font-size: 28px
  .content
    margin-top: 50px
    margin-left: 66px
    width: 1751px
    height: 848px
    background-color: rgba(255,255,255,0.6)
    border-radius: 15px
    .left
      float: left
      padding-top: 30px
      height: calc(100% - 30px)
      width: 250px
      background-color: rgba(255,255,255,0.6)!important
      border-radius: 15px 0 0 15px
      >>>i
        margin-top: -12px
      >>>.el-submenu__title
        font-size: 24px
      >>>.el-menu-item
        font-size: 24px
    .right
      float: left
      width: 1500px
      >ul
        float: left
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        align-items: center
        >li
          width: 400px
          height: 70px
          font-size: 24px
          .key
            @include font(24px, 400, $color-word-blue)
            display: inline-block
            width: 150px

</style>
