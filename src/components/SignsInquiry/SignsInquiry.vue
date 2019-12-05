<template>
  <div class='signsInquiry'>
    <div class="content">

    </div>
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
.signsInquiry
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  .content
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 850px
</style>
