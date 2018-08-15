<template>
  <div class="articleCategory">
    <ul>
      <router-link class="pull-left fs16 fc3" activeClass="current" to="/xiandu" tag="li" exact>全部</router-link>
      <router-link class="pull-left fs16 fc3" activeClass="current" :to="`/xiandu/${category.en_name}`" v-for="(category, index) in categorys" tag="li" exact :key="index">{{category.name}}</router-link>
    </ul>
  </div>
</template>
<script>
import { getCategorys } from '@/api/api'
export default {
  data () {
    return {
      categorys: []
    }
  },
  created () {
    getCategorys().then((res) => {
      this.categorys = res.results
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style lang="stylus" scoped>
.articleCategory
  width 100%
  overflow-y scroll
  height 0.4rem
  line-height 0.4rem
  background #f1f1f1
ul
  display flex
  li
    white-space nowrap
    padding 0 0.1rem
    &.current
      color #409eff
</style>
