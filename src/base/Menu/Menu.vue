<template>
  <div class="menu">
    <div class="content" v-if="isShow">
      <div class="title">广东省中西结合医院——骨外科</div>
      <div class="mian">
        <div class="baseInfo">
          <div class="item">
            <label>病患</label>
            <span class="value">： 杨洋</span>
          </div>
          <div class="item">
            <label>性别</label>
            <span class="value">： 男</span>
          </div>
          <div class="item">
            <label>入院日期</label>
            <span class="value">： 2019.02.23</span>
          </div>
          <div class="item">
            <label>年龄</label>
            <span class="value">： 21</span>
          </div>
          <div class="item">
            <label>护理等级</label>
            <span class="value">： 二级</span>
          </div>
          <div class="item">
            <label>性质</label>
            <span class="value">： 医保</span>
          </div>
          <div class="item">
            <label>诊断</label>
            <span class="value">： 小腿骨折</span>
          </div>
          <div class="item">
            <label>主治医师</label>
            <span class="value">： 陈教授</span>
          </div>
          <div class="item">
            <label>科室</label>
            <span class="value">： 骨外科</span>
          </div>
        </div>
        <ul class="nav">
          <router-link
            :to="item.path"
            v-for="(item, index) in nav"
            :key="index"
            tag="li"
            class="navBtn"
          >
            <i :class="item.icon"></i>
            <p>{{item.text}}</p>
          </router-link>
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
      isShow: this.isShowMenu,
      nav: [
        {
          path: '/caseInquiry',
          icon: 'icon-record',
          text: '病例查询'
        },
        {
          path: '/medicalTechInquiry',
          icon: 'icon-medical-tech',
          text: '医技查询'
        },
        {
          path: '/voiceRecord',
          icon: 'icon-sound',
          text: '录音查询'
        },
        {
          path: '/feeInquiry',
          icon: 'icon-fee',
          text: '费用查询'
        },
        {
          path: '/docOrderInquiry',
          icon: 'icon-advice',
          text: '医嘱查询'
        },
        {
          path: '/signsInquiry',
          icon: 'icon-sign',
          text: '体征查询'
        },
        {
          path: '/patientSide',
          icon: 'icon-patient',
          text: '患者端'
        },
        {
          path: '/nurseSide',
          icon: 'icon-nurse',
          text: '护士端'
        },
        {
          path: '/careWorkerSide',
          icon: 'icon-worker',
          text: '护工端'
        }
      ]
    }
  },
  props: {
    isShowMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  watch: {
    isShowMenu (val) {
      this.isShow = val
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.menu
  .content
    float: left
    width: 1350px
    height: 848px
    background-color: rgba(255,255,255,0.5)
    border-radius: 15px
    .title
      line-height: 88px
      padding-left: 50px
      background-color: rgba(255,255,255,0.55)
      border-radius: 15px 15px 0 0
      @include font(32px, 500, $color-word-black)
    .mian
      padding: 44px 40px
      .baseInfo
        background-color: rgba(255,255,255,0.55)
        border: 1px solid $color-border-blue
        border-bottom: none
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        .item
          width: 422.5px
          height: 80px
          border-bottom: 1px solid $color-border-blue
          label
            display: inline-block
            width: 120px
            padding-left: 40px
            line-height: 80px
            @include font(28px, 500, $color-word-black)
          .value
            line-height: 80px
            @include font(28px, 500, $color-word-blue)
      .nav
        float: left
        padding: 0
        .navBtn
          margin: 12px 19px
          float: left
          width: 147px
          height: 147px
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          background-color: rgba(255,255,255,0.6)
          border-radius: 10px
          @include font(20px, 800, $color-word-blue)
          &:nth-child(7n+1)
            margin-left: 0
          &:nth-child(7n)
            margin-right: 0
          p
            margin: 0
          i
            @include font(40px, 800, $color-word-blue)
            margin-bottom: 10px
  .menuBtn
    width: 86px
    cursor: pointer
    position: absolute
    bottom: -43px
    right: 60px
</style>
