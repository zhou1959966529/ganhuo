<template>
  <div class="scrollLoad center fc9">
    <span v-if="loaded" class="loaded">查看更多</span>
    <span v-if="isLoading" :class="isLoading?'isLoading':''">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <div>加载中</div>
    </span>
    <span v-if="noResult" class="noResult">我是有底线的</span>
  </div>
</template>
<script>
export default {
  props: ['status'],
  computed: {
    isLoading () {
      return this.status === 'padding'
    },
    loaded () {
      return this.status === 'loaded'
    },
    noResult () {
      return this.status === 'noResult'
    }
  }
}
</script>

<style lang="stylus" scoped>
.scrollLoad>span
  display block
  height 0.2rem
  padding-top 0.1rem
.scrollLoad>.isLoading
  height: 0.4rem
.noResult
  position relative
  &:before
    content ''
    width 0.3rem
    display inline-block
    position: absolute;
    top: 55%;
    left: 0;
    border-top: 1px solid #d1d1d1;
    width: 50%;
    transform: 0 0;
    transform: scale(0.5,0.5);
  &:after
    content ''
    width 0.3rem
    display inline-block
    position: absolute;
    top: 55%;
    left: 50%;
    border-top: 1px solid #d1d1d1;
    width: 50%;
    transform: 0 0;
    transform: scale(0.5,0.5);
.spinner {
  margin 0 auto
  width: 0.3rem;
  font-size: 10px;
  text-align center
}
.spinner > div {
  background-color: #409eff;
  height: 0.2rem;
  width: 0.01rem;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
