import axios from 'axios'
// 设置跨域请求时是否需要使用凭证，默认false
axios.defaults.withCredentials = false
// 设置baseUrl
axios.defaults.baseURL = process.env.baseUrl
// 设置超时中断
axios.defaults.timeout = 100000
// import vueExample from '@/main'
// // axios拦截器
axios.interceptors.request.use(config => {
//  设置请求头
  // config.headers.Accept = 'application/json';
  // vueExample.$store.state.isLoading = true
  // console.log(config)
  return config
})

axios.interceptors.response.use(
  response => {
    // 在这里你根据返回数据做相应拦截
    if (response.status === 200) {
      // vueExample.$store.state.isLoading = false;
      if (response.data.error) {
        console.log('操作失败')
      } else {
        return Promise.resolve(response.data)
      }
    }
  },
  error => {
    if (error) {
      // if (error.response) {
      //           switch (error.response.status) {
      //               case 401:
      //                 console.log(error.response.data.error_msg);
      //                 return false
      //                   // 这里写清除token的代码
      //                   // router.replace({
      //                   //     path: 'login',
      //                   //     query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
      //                   // })
      //           }
      //       }
      // vueExample.$store.state.isLoading = false;
      return Promise.reject(error.response.data)
    }
  }
)
export default axios
