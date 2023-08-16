<script setup>
import useCityStore from "@/stores/modules/city"
import { computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const cityStore = useCityStore()

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const listIndex = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const itemClick = item => {
  console.log(item)
  cityStore.currentCity = item
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="listIndex">
      <!-- 热门城市 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="item" @click="itemClick(item)">{{ item.cityName }}</div>
        </template>
      </div>
    
      <template v-for="(item, index) in groupData.cities" :key="index">
          <van-index-anchor :index="item.group" />
          <template v-for="(item, index) in item.cities" :key="index">
            <van-cell :title="item.cityName" @click="itemClick(item)"/>
          </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-right: 20px;

    .item {
      padding: 2.6667vw;
      margin: 2.6667vw;
      background-color: #fff4ec;
      font-size: 3.2vw;
      border-radius: 3.7333vw;
    }
  }
}
</style>
