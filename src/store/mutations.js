/**
 * 客户端数据存储--为防止页面刷新时数据丢失
 */
// 会话存储
const sessionSet = (key, val) => {
  if (typeof (val) === 'object') {
    val = JSON.stringify(val)
  }
  sessionStorage.setItem(key, val)
}
// 本地存储
// const localSet = (key, val) => {
//   if (typeof (val) === 'object') {
//     val = JSON.stringify(val)
//   }
//   localStorage.setItem(key, val)
// }

export default {
  set_isImageMask: (state, val) => {
    state.isImageMask = val
  },
  set_dataCategory: (state, val) => {
    state.dataCategory = val
    sessionSet('dataCategory', val)
  }
  // setIsLoading:(state,val) => {
  //   state.isLoading = val
  // }
}
