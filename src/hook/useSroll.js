import { ref, onMounted, onUnmounted } from "vue"
// 防抖 / 节流
import { throttle } from "underscore"

export default function useScroll() {
  // 是否滚到底
  const scrollState = ref(false)
  const pageHeight = ref(0)
  const scrollTop = ref(0)
  const scrollClientHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    // 页面整体高度
    pageHeight.value = document.documentElement.scrollHeight
    // 相对的页面整体高度
    scrollTop.value = document.documentElement.scrollTop
    // 页面的视口高度
    scrollClientHeight.value = document.documentElement.clientHeight
    // 如果页面高度 + 相对的页面高度 >= 页面整体高度 === 页面刷到底了
    if (scrollClientHeight.value + scrollTop.value >= pageHeight.value) {
      scrollState.value = true
    }
  }, 100)

  // 组件加载完成监听
  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  // 组件卸载完成后移除监听
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { scrollState, pageHeight, scrollTop, scrollClientHeight }
}