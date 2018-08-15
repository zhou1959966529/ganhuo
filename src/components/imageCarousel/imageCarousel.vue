<template>
  <div class="carousel clearfix">
    <ul class="clearfix">
      <li class="pull-left" v-for="(image, index) in images" :key="index">
        <img :src="image" @click="showImage(image)" class="carouselItem pull-left">
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['images'],
  methods: {
    ...mapActions({
      showImage: 'commit_set_isImageMask'
    })
  }
}
</script>
<style lang="stylus" scoped>
.carousel
  width 100%
  position relative
  overflow scroll
  ul
    display inline-flex
    padding 0.1rem 0
    li
      margin-right 0.1rem
      display inline-block
      &:first-child
        // margin-left: 0.1rem
      img
        width 1.22rem
</style>
