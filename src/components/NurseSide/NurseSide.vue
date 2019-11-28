<template>
  <div class='remoteConsultation'>
    <div class="top">
      <div class="select">
        <el-date-picker
          v-model="value"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" class="btn">搜索</el-button>
      </div>
      <div class="operating">
        <el-button type="primary" class="btn">新增</el-button>
        <el-button type="primary" class="btn">删除</el-button>
        <el-button type="primary" class="btn">发送</el-button>
        <el-button type="primary" class="btn">安排</el-button>
        <el-button type="primary" class="btn">作废</el-button>
      </div>
    </div>
    <div class="main">
      <el-table
        class="table"
        :data="tableData"
        style="width: 100%"
        >
        <el-table-column
          prop="date"
          label="日期"
          align="center">
        </el-table-column>
        <el-table-column
          prop="topic"
          label="主题"
          align="center">
        </el-table-column>
        <el-table-column
          prop="peopleAmount"
          label="人数"
          align="center">
        </el-table-column>
        <el-table-column
          prop="doctor"
          label="医师"
          align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center">
        </el-table-column>
        <el-table-column
          prop="operating"
          label="操作"
          align="center">
        </el-table-column>
      </el-table>
      <div class="tabs">
        <el-button type="primary" class="tabBtn">申请记录</el-button>
        <el-button type="primary" class="tabBtn" disabled>会诊病历</el-button>
        <el-button type="primary" class="tabBtn" disabled>会诊视频</el-button>
        <el-button type="primary" class="tabBtn" disabled>会诊意见</el-button>
        <el-button type="primary" class="tabBtn" disabled>会诊评价</el-button>
        <el-button type="primary" class="tabBtn" disabled>开始会诊</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      name: '',
      bedNo: '',
      value: '',
      tableData: []
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
.remoteConsultation
  margin: 50px 0 0 66px
  width: 1751px
  .top
    display: flex
    justify-content: space-between
    align-items: center
  .btn
    width: 100px
    height: 44px
    border-radius: 10px
  .table
    margin-top: 30px
    border-radius: 10px 10px 0 0
    height: 730px
    background-color: rgba(255,255,255,0.55)
  .main
    .tabs
      width: 100%
      height: 86px
      background-color: rgba(255,255,255,0.46)
      border-radius: 0 0 10px 10px
      .tabBtn
        width: 150px
        border-radius: 10px
        margin-left: 10px
        margin-top: 20px
</style>
