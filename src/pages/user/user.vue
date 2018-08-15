<template>
  <div class="user">
    <Header :title="title"/>
    <div class="container center">暂未开放</div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
export default {
  data () {
    return {
      title: '个人中心'
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
