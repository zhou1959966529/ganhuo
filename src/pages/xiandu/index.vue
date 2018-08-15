<template>
  <div class="xiandu">
    <Header :title="title"/>
    <XianduCategory @getCategoryData="_getCategoryData"/>
    <div class="container">
      <ArticleList :articles="articleList" />
      <ScrollLoading :status="loadStatus"/>
      <ScrollTop/>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import ArticleList from '@/components/articleList/articleList'
import ScrollLoading from '@/components/scrollLoading/scrollLoading'
import XianduCategory from '@/components/xianduCategory/xianduCategory'
import ScrollTop from '@/components/scrollTop/scrollTop'

import { debounce } from '@/assets/js/common'
import { getXianduAll } from '@/api/api'

export default {
  data () {
    return {
      title: '闲读',
      articleList: [],
      category: '',
      loadStatus: '',
      categoryList: []
    }
  },
  created () {
    this.category = this.$route.params.category
    this.init()
  },
  methods: {
    init () {
      // 滚动加载成功回调
      let success = (res) => {
        this.articleList.push(...res.results)
      }
      // 初始化数据
      getXianduAll().then((res) => {
        this.articleList = res.results
      }).catch((err) => {
        console.log(err)
      })
      // 滚动调用闲读数据
      this.handleScroll(getXianduAll, success)
    },
    handleScroll (request, result, page = 1) {
      // 滚动加载
      let nextPage = page
      let debounceCb = () => {
        page++
        // 防止数据重复
        if (nextPage === page) {
          return
        }
        nextPage = page
        this.loadStatus = 'padding'
        // 加载下一页
        request(nextPage).then((res) => {
          if (!res.results) {
            this.loadStatus = 'noResult'
            return
          }
          result(res)
          this.loadStatus = 'loaded'
        }).catch((err) => {
          this.loadStatus = 'loaded'
          console.log(err)
        })
      }
      // 滚动监听
      window.addEventListener('scroll', function () {
        /**
         * window.innerHeight 窗口可视高度
         * window.pageYOffset 滚动条滚动高度
         * document.body.offsetHeight body的高度
        */
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
          debounce(debounceCb, 600)
        }
      })
    },
    _getCategoryData (res) {
      console.log(res)
    }
  },
  watch: {
  },
  components: {
    Header,
    Footer,
    ArticleList,
    ScrollLoading,
    XianduCategory,
    ScrollTop
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 0
</style>
