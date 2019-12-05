<template>
  <div class="docOrderInquiry">
    <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value3" placeholder="请选择">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-checkbox v-model="justShowFree">只显示不计费医嘱</el-checkbox>
    <el-button type="primary" class="btn">查询</el-button>
    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="dose" label="剂量" align="center"></el-table-column>
      <el-table-column prop="frequency" label="频次" align="center"></el-table-column>
      <el-table-column prop="amount" label="数量" align="center"></el-table-column>
      <el-table-column prop="beginTime" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="停止时间" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabIndex: 0,
      value1: '',
      options1: [],
      value2: '',
      options2: [],
      value3: '',
      options3: [],
      justShowFree: false,
      tableData: [
        {
          name: '临转往感染科',
          dose: '1',
          frequency: '1',
          amount: '1',
          beginTime: '2019-02-07 14:46:35',
          endTime: '2019-02-07 14:46:35'
        },
        {
          name: '临转往感染科',
          dose: '1',
          frequency: '1',
          amount: '1',
          beginTime: '2019-02-07 14:46:35',
          endTime: '2019-02-07 14:46:35'
        }
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
.docOrderInquiry
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  >>>.el-input
    width: 182px
  .btn
    width: 100px
    height: 44px
    border-radius: 10px
  .table
    margin-top: 20px
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 785px
    i
      @include font(20px, 800, $color-word-blue)
</style>
