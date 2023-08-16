<script setup>
import router from "@/router"
import { computed, ref } from "vue";
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import CityGroup from './components/city-group.vue'

const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { allCity } = storeToRefs(cityStore)

const cancelClick = () => {
  router.back()
}

const value = ref('');
const tabActive = ref('')

// const currentTabList = computed(() => allCity.value[tabActive.value])
</script>

<template>
  <div class="city">
    <van-search v-model="value" @cancel="cancelClick" show-action shape="round" placeholder="城市/区域/位置" />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(item, key, index) in allCity" :key="index">
          <van-tab :title="item.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="(item, key, index) in allCity" :key="index">
        <CityGroup v-show="key === tabActive" :group-data="item"/>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 13.3333vw;
  .content {
    height: calc(100vh - 104px);
    overflow: auto;
  }
  .van-tabs {
    position: relative;
    z-index: 9;
  }
}
</style>
