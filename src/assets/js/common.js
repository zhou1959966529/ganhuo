/**
 * 深拷贝
 * --------------
 * @param {object} obj
 * @return {object}
 */
export function deepClone (obj) {
  let _obj = JSON.stringify(obj)
  let objClone = JSON.parse(_obj)
  return objClone
}

/**
 * 防抖
 * -----------
 * @param {func} fn
 * @param {number} delay
 */
let timer
export function debounce (fn, delay) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, delay)
}
/**
 * 滚动顶部
 */
export function toTop () {
  // 获得当前高度
  let distance = document.documentElement.scrollTop || document.body.scrollTop
  // 每步的距离
  let step = distance / 100
  jump()
  function jump () {
    if (distance > 0) {
      distance -= step
      // document.documentElement.scrollTop = distance;
      // document.body.scrollTop = distance;
      window.scrollTo(0, distance)
      setTimeout(jump, 5)
    }
  }
}
