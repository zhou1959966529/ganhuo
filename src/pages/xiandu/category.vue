<template>
  <div class="category">
    <Header/>
    <XianduCategory @getCategoryData="_getCategoryData"/>
    <div class="content">
      <div v-if="categorys" class="categorys borderBottom">
        <table>
          <tr>
            <!-- <th>子分类:</th> -->
            <td>
              <ul>
                <li @click="childCategory(item.id)" :class="currentChildCategory === item.id ? 'active' : ''" v-for="(item, index) in categorys" :key="index">{{item.title}}</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <keep-alive>
        <ul class="categoryList">
          <li class="borderBottom" v-for="(item, index) in categoryList" :key="index">
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
      </keep-alive>
    </div>
    <ScrollLoading :status="loadStatus"/>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import XianduCategory from '@/components/xianduCategory/xianduCategory'
import ScrollLoading from '@/components/scrollLoading/scrollLoading'
import { debounce } from '@/assets/js/common'
import { getCategory, getCategoryData } from '@/api/api'
export default {
  data () {
    return {
      currentCategory: '',
      currentChildCategory: '',
      categorys: [],
      categoryList: [],
      loadStatus: 'loaded',
      initPage: 1
    }
  },
  mounted () {
    this.currentCategory = this.$route.params.category
    this.getCategory()

    // 滚动加载成功回调
    let success = (res) => {
      this.categoryList.push(...res.results)
    }
    // 滚动加载
    this.handleScroll(getCategoryData, success)
  },
  methods: {
    handleScroll (request, result) {
      // 滚动加载
      let nextPage = this.initPage
      let debounceCb = () => {
        this.initPage++
        // 防止数据重复
        if (nextPage === this.initPage) {
          return
        }
        nextPage = this.initPage
        this.loadStatus = 'padding'
        // 加载下一页
        request(this.currentChildCategory, nextPage).then((res) => {
          if (!res.results) {
            this.loadStatus = 'noResult'
            return
          }
          result(res)
          this.loadStatus = 'loaded'
          this.handleScroll = this.handleScroll
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
    getCategory () {
      getCategory(this.currentCategory).then((res) => {
        this.categorys = res.results

        this.currentChildCategory = this.categorys[0].id

        return getCategoryData(this.currentChildCategory)
      }).then((res) => {
        this.categoryList = res.results
      })
    },
    childCategory (id) {
      this.currentChildCategory = id
      // 初始化initPage
      this.initPage = 1
      getCategoryData(this.currentChildCategory).then((res) => {
        this.categoryList = res.results
      })
    },
    _getCategoryData (res) {
      console.log(res)
    }
  },
  watch: {
    $route (to, from) {
      if (!to.params.category) return
      this.currentCategory = this.$route.params.category
      this.getCategory()
    }
  },
  components: {
    Header,
    Footer,
    ScrollLoading,
    XianduCategory
  }
}
</script>
<style lang="stylus" scoped>
.categorys
  position relative
  overflow hidden
  width 100%
  padding 0.05rem 0
  margin-bottom 0.01rem
  border-bottom: 1px dashed #ddd
  table
    th
      white-space nowrap
    li
      display inline-block
      // border 1px solid #aaa
      border-radius 0.05rem
      margin 0.01rem 0.05rem
      padding 0.02rem
.categoryList
  li
    position relative
    padding: 0.1rem
</style>
