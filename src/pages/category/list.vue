<template>
  <div class="category">
    <Header :title="title"/>
    <ul class="clearfix">
      <router-link tag="li" class="li fs16 borderBottom" :to="`category/${item}`" v-for="(item, index) in categoryList" :key="index">
        {{item}}
        <i class="iconfont icon-arrow_right pull-right"></i>
      </router-link>
    </ul>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: '分类'
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      categoryList: 'dataCategory'
    })
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="stylus" scoped>
  .li
    display block
    padding 0 0.1rem
    height 0.4rem
    line-height 0.4rem
    position relative
</style>
