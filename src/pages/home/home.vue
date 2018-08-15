<template>
  <div class="home">
    <Header :title='title'/>
    <div class="container">
      <div class="list" v-for="(items, title) in todayData" :key="title">
        <div class="title fc3 fs18 center">{{title}}</div>
        <div class="content" >
          <div v-for="(item) in items" :key="item._id">
            <a class="fs16" :href="item.url">{{item.desc}}</a>
            <ImageCarousel :images='item.images'/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import ImageCarousel from '@/components/imageCarousel/imageCarousel'

import { getToday } from '@/api/api'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '最新',
      category: '',
      todayData: ''
    }
  },
  created () {
    getToday().then(data => {
      this.category = data.category
      this.todayData = data.results
      // 保存分类数据
      this.commit_setDataCategory(data.category)
    })
  },
  methods: {
    ...mapActions(['commit_setDataCategory'])
  },
  components: {
    Header,
    Footer,
    ImageCarousel
  }
}
</script>
<style lang="stylus" scoped>
.list
    margin-bottom 0.2rem
  .title
    padding 0.1rem 0
  a
    padding 0.05rem 0
.content>div
  margin-bottom 0.1rem
.itemImage>img
  width 1.22rem
  vertical-align top
  margin 0 0.1rem 0.1rem
</style>
