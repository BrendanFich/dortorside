<template>
  <div class="index">
    <div class="top"></div>
    <div class="main">
      <div class="left"></div>
      <div class="mian">
        <div class="menu"></div>
        <div class="menuBtn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.index
  width: 100%
  height: 100vh
  background: $color-white
</style>
