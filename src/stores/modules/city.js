import { defineStore } from 'pinia'
import { getCityAll } from '@/service'

const useCityStore = defineStore("city", {
  state: () => ({
    allCity: null,
    currentCity: { cityName: "广州" }
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore
