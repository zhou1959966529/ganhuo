<template>
  <div class="header mainBg center">
    <span class="pull-left" @click="back">
      <i class="iconfont icon-xiangzuo"></i>
    </span>
    <span v-if="title">{{title}}</span>
    <span class="pull-right">
      <i class="iconfont icon-arrow_right"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: ['title', 'noRight'],
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  height 0.3rem
  line-height 0.3rem
  font-size 0.18rem
  padding 0 .1rem
</style>
