/**
 * 客户端数据获取--为防止页面刷新时数据丢失
 */
// 会话存储
const sessionGet = (key) => {
  var itemVal = sessionStorage.getItem(key)
  // 字符串对象转json
  if (typeof itemVal === 'string') {
    let itemObj = JSON.parse(itemVal)
    if (typeof itemObj === 'object' && itemObj) {
      return itemObj
    }
  }
  return itemVal
}
// // 本地存储
// const ls_get = (key)=>{
//   var itemVal = localStorage.getItem(key)
//   // 字符串对象转json
//   if(typeof str == 'string'){
//     item_obj = JSON.parse(itemVal);
//     if(typeof item_obj == 'object' && item_obj){
//       return item_obj
//     }
//   }
//   return itemVal
// }

export default {
  // name(state){
  //   if(!state.name){
  //     state.name = ss_get("name");
  //   }
  //   return state.name
  // },
  isImageMask (state) {
    return state.isImageMask
  },
  dataCategory (state) {
    if (!state.dataCategory.length) {
      state.dataCategory = sessionGet('dataCategory')
    }
    return state.dataCategory
  }
}
