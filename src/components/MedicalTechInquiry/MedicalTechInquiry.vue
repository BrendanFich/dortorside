<template>
  <div class='medicalTechInquiry'>
    <el-table
      class="table"
      :data="tableData"
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
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabIndex: 0,
      tableData: []
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.medicalTechInquiry
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  .el-table
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 850px
</style>
