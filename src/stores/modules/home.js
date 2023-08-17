import { defineStore } from "pinia"
import { getHomeHotTags, getHomeCategories, getHomeHouseList } from "@/service"

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: null,
    categories: null,
    houseList: [],
    currentHouseListPage: 1
  }),
  actions: {
    async fetchHomeHotTags() {
      const result = await getHomeHotTags()
      this.hotSuggests = result.data
    },
    async fetchHomeCategories() {
      const result = await getHomeCategories()
      this.categories = result.data
    },
    async fetchHouseList() {
      const result = await getHomeHouseList(this.currentHouseListPage)
      this.houseList.push(...result.data)
      this.currentHouseListPage++
    }
  }
})

export default useHomeStore