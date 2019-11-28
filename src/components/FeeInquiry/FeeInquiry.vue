<template>
  <div class='feeInquiry'>
    <el-input v-model="name" placeholder="输入患者姓名"></el-input>
    <el-input v-model="bedNo" placeholder="输入床号"></el-input>
    <el-button type="primary" class="btn">搜索</el-button>
    <el-table
      class="table"
      :data="tableData1"
      style="width: 100%"
      >
      <el-table-column
        prop="itemName"
        label="项目名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop="itemAmount"
        label="项目数量"
        align="center">
      </el-table-column>
      <el-table-column
        prop="allFee"
        label="总金额（元）"
        align="center">
      </el-table-column>
      <el-table-column
        prop="payType"
        label="缴费方式"
        align="center">
      </el-table-column>
      <el-table-column
        prop="belogDept"
        label="所属科室"
        align="center">
      </el-table-column>
    </el-table>
    <el-table
      class="table"
      :data="tableData2"
      style="width: 100%"
      >
      <el-table-column
        prop="badNo"
        label="床号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="feeName"
        label="费用名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        align="center">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="数量"
        align="center">
      </el-table-column>
      <el-table-column
        prop="unitPrice"
        label="单价"
        align="center">
      </el-table-column>
      <el-table-column
        prop="allFee"
        label="总金额"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      name: '',
      bedNo: '',
      tableData1: [],
      tableData2: []
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
.feeInquiry
  margin: 50px 66px
  .el-input
    width: 182px
    margin-right: 30px
    >>>.el-input__inner
      background: $color-white
      border-radius: 10px
      height: 44px
  .btn
    width: 100px
    height: 44px
    border-radius: 10px
  .table
    margin-top: 30px
    border-radius: 10px
    height: 377px
    background-color: rgba(255,255,255,0.55)
</style>
