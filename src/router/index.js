import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
const home = resolve => require(['@/pages/home/home'], resolve)
const xiandu = resolve => require(['@/pages/xiandu/index'], resolve)
const xianduCategory = resolve => require(['@/pages/xiandu/category'], resolve)
const categoryList = resolve => require(['@/pages/category/list'], resolve)
const categoryView = resolve => require(['@/pages/category/view'], resolve)
const user = resolve => require(['@/pages/user/user'], resolve)
const notFound = resolve => require(['@/pages/notFound/notFound'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/xiandu',
      component: xiandu,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/xiandu/:category',
      component: xianduCategory,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/xiandu/:category/:name',
      component: xianduCategory,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/category',
      component: categoryList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/category/:name',
      component: categoryView,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/user',
      component: user,
      meta: {
        keepAlive: true,
        login_require: false
      }
    },
    {
      path: '/login',
      component: user
    },
    {
      path: '*',
      component: notFound,
      meta: {
        keepAlive: true
      }
    }
  ]
})

/**
 * 路由守卫
 * --------
 * 可根据mate.login_require字段判断是否需要登录
 * ---------------
 * 也可做权限分配
 */
router.beforeEach((to, from, next) => {
  if (to.meta.login_require) {
    next('/login')
    return
  }
  next()
})

export default router
