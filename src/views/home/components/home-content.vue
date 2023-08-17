<script setup>
import useHomeStore from "@/stores/modules/home";
import useScroll from '@/hook/useSroll'
import HouseItemV3 from '@/components/house/house-item-v3/index.vue'
import HouseItemV9 from '@/components/house/house-item-v9/index.vue'
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const homeStore = useHomeStore()
homeStore.fetchHouseList()

const { houseList } = homeStore
const { scrollState } = useScroll()
// 监听是否滚动到底部
watch(scrollState, (newValue) => {
  if(newValue) {
    homeStore.fetchHouseList()
    scrollState.value = false
  }
})
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="house-list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <div>
          <HouseItemV3 v-if="item.discoveryContentType === 3" :houseItemData="item"></HouseItemV3>
          <HouseItemV9 v-else-if="item.discoveryContentType === 9" :houseItemData="item"></HouseItemV9>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 4vw 5.3333vw;
  .house-list {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2.6667vw 2.6667vw;
  }
  .title {
    margin-bottom: 2.6667vw;
  }
}
</style>
