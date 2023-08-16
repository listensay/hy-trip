import { defineStore } from "pinia"
import { getHomeHotTags, getHomeCategories } from "@/service"

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: null,
    categories: null
  }),
  actions: {
    async fetchHomeHotTags() {
      const result = await getHomeHotTags()
      this.hotSuggests = result.data
    },
    async fetchHomeCategories() {
      const result = await getHomeCategories()
      this.categories = result.data
    }
  }
})

export default useHomeStore