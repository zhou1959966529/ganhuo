import axios from './axios'
// 最新数据
export const getToday = () => {
  return axios.get('api/today')
}
// 所有数据
/**
 * 该数据为所有数据，暂时用于闲读页
 * @param {number} page
 * @param {number} count
 */
export const getXianduAll = (page = 1, count = 20) => {
  return axios.get(`api/data/all/${count}/${page}`)
}
// 分类数据
export const getDataCategory = (category, page = 1, count = 20) => {
  return axios.get(`api/data/${category}/${count}/${page}`)
}

/**************/
// 闲读分类
export const getCategorys = (page = 1, count = 20) => {
  return axios.get(`api/xiandu/categories`)
}
// 闲读子分类
export const getCategory = (category, page = 1, count = 20) => {
  return axios.get(`api/xiandu/category/${category}`)
}
// 闲读分类数据
export const getCategoryData = (categoryId, page = 1, count = 20) => {
  return axios.get(`api/xiandu/data/id/${categoryId}/count/${count}/page/${page}`)
}
