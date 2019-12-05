<template>
  <div class="voiceRecord">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <el-button type="primary" class="btn">查询</el-button>
    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" align="center"></el-table-column>
      <el-table-column prop="duration" label="时长" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <i class="el-icon-video-play"></i>
          <i class="el-icon-delete"></i>
        </template>
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
      tableData: [
        {
          date: '2016-02-26 13:21:15',
          duration: '9分32秒'
        },
        {
          date: '2016-02-26 13:21:15',
          duration: '9分32秒'
        },
        {
          date: '2016-02-26 13:21:15',
          duration: '9分32秒'
        }
      ],
      value: ''
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
.voiceRecord
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
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
