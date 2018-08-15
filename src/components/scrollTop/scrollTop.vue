<template>
  <transition name="fade">
    <div class="scrollTop" v-if="isShow">
      <span @click="top">
        <i class="iconfont icon-zhiding-copy"></i>
      </span>
    </div>
  </transition>
</template>
<script>
import { toTop } from '@/assets/js/common'
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    let $this = this
    // 设置滚动距离
    let max = 500
    window.addEventListener('scroll', function () {
      // 滚动距离大于max时触发
      $this.isShow = window.scrollY > max
    })
  },
  methods: {
    top () {
      toTop()
    }
  }
}
</script>
<style lang="stylus" scoped>
.scrollTop
  position fixed
  right 0.2rem
  bottom 0.6rem
  display inline-block
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s ease
  &.fade-enter, &.fade-leave-active
    opacity: 0
  &>span
    border 1px solid #ddd
    padding 0.05rem
    border-radius 50%
    &>i
      position relative
      top 0.02rem
</style>
