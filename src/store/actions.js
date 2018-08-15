export default {
  // 图片遮罩
  commit_set_isImageMask (context, val) {
    context.commit('set_isImageMask', val)
  },
  // 数据分类
  commit_setDataCategory (context, val) {
    context.commit('set_dataCategory', val)
  }
}
