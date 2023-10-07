import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => ({
    // 开始日期
    startDate: startDate,
    // 结束日期
    endDate: endDate,
    loading: false
  })
})

export default useMainStore
