<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <ImageMask />
  </div>
</template>

<script>
import ImageMask from '@/components/imageMask/imageMask'
export default {
  name: 'App',
  components: {
    ImageMask
  }
}

</script>

<style>
#app {
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','SimSun',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  font-size: 0.14rem
}
[v-cloak] {
    display: none !important;
}
html, body,#app{
  width: 100%;
  height: 100%;
}
</style>
<style lang="stylus">
  @import '//at.alicdn.com/t/font_780767_18kk2kucloh.css';
  @import './assets/css/reset.styl';
  @import './assets/css/common.styl';
</style>
