<script setup>
import { computed, ref } from 'vue'
import useHomeStore from '@/stores/modules/home'
const homeStore = useHomeStore()

homeStore.fetchHomeCategories()
const categoryList = computed(() => homeStore.categories)
const categoryActive = ref(0)
</script>

<template>
  <div class="categoryBar">
    <van-tabs v-model:active="categoryActive" sticky color="#ff9854">
      <van-tab v-for="item in categoryList" :key="item.id">
        <template #title>
          <div class="category-item">
            <img :src="item.pictureUrl">
            <span>{{ item.title }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 8vw;
  }

  span {
    font-size: 3.2vw;
  }
}
</style>
