import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => ({
    // 住宿日期

    // 开始日期
    startDate: startDate,
    // 结束日期
    endDate: endDate
  })
})

export default useMainStore