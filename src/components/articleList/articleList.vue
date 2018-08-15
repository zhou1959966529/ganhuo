<template>
  <div class="articleList">
    <div class="article borderBottom" v-for="(item,index) in articles" :key="index">
      <a :href="item.url">{{item.desc}}</a>
      <div class="clearfix">
        <span class="pull-right fs12">作者: {{item.who}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles']
}
</script>
<style lang="stylus" scoped>
.article
  position relative
  padding 0.1rem
  padding-bottom 0.02rem
  a
    color #333
    display block
    padding 0.04rem 0
</style>
