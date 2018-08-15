<template>
  <transition name="fade">
    <div v-if="isShow" class="imageMask center" @touchmove.prevent @click="isImageMask(false)">
      <img :src="isShow" alt="">
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      isImageMask: 'commit_set_isImageMask'
    })
  },
  computed: {
    ...mapGetters({
      isShow: 'isImageMask'
    })
  }
}
</script>

<style lang="stylus" scoped>
.imageMask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background white
  opacity 0.95
  z-index 2
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s ease
  &.fade-enter, &.fade-leave-active
    opacity: 0
  img
    width 80%
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>
