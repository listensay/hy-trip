import { defineStore } from "pinia"
import { getHomeHotTags } from "@/service/modules/home"

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: null
  }),
  actions: {
    async fetchHomeHotTags() {
      const result = await getHomeHotTags()
      this.hotSuggests = result.data
    }
  }
})

export default useHomeStore