<template>
  <div class="categoryView">
    <Header :title="title"/>
    <!-- <ul>
      <li v-for="(item, index) in resultData" :key="index">
        <a :href="item.url">{{item.desc}}</a>
        <span class="pull-right">作者: {{item.who}}</span>
      </li>
    </ul> -->
    <ArticleList :articles="resultData" />
    <ScrollLoading :status="loadStatus"/>
    <ScrollTop />
  </div>
</template>

<script>
import Header from '@/components/header/header'
import ArticleList from '@/components/articleList/articleList'
import ScrollLoading from '@/components/scrollLoading/scrollLoading'
import ScrollTop from '@/components/scrollTop/scrollTop'

import { debounce } from '@/assets/js/common'
import { getDataCategory } from '@/api/api'
export default {
  data () {
    return {
      title: '',
      resultData: [],
      loadStatus: 'loaded'
    }
  },
  created () {
    let name = this.$route.params.name
    this.title = name
    getDataCategory(name).then((res) => {
      this.resultData = res.results
    })

    // 滚动加载成功回调
    let success = (res) => {
      this.resultData.push(...res.results)
    }
    // 滚动加载
    this.handleScroll(getDataCategory, success)
  },
  methods: {
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
        request(this.title, nextPage).then((res) => {
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
    }
  },
  components: {
    Header,
    ArticleList,
    ScrollLoading,
    ScrollTop
  }
}
</script>
