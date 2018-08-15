// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'

Vue.use(Vuex)
// Vue.use(ElementUI)
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  error: require('./assets/img/error.jpg'),
  loading: require('./assets/img/imgLoading.gif')
})

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
