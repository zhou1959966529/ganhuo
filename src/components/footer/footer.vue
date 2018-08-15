<template>
<div class="footer-warp">
  <div class="footer borderTop">
    <router-link activeClass="active" to="/" exact tag="div">最新</router-link>
    <router-link activeClass="active" to="/category" exact tag="div">分类</router-link>
    <router-link activeClass="active" to="/xiandu" exact tag="div">闲读</router-link>
    <router-link activeClass="active" to="/user" exact tag="div">个人中心</router-link>
  </div>
</div>
</template>
<style lang="stylus" scoped>
.footer-warp
  position relative
  margin-top 0.4rem
.footer
  width 100%
  display table
  text-align center
  position fixed
  bottom 0
  height 0.4rem
  line-height 0.3rem
  background white
  div
    display inline-block
    width 25%
</style>
