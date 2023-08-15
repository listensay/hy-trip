<script setup>
import SearchBox from './components/search-box.vue'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()

homeStore.fetchHomeHotTags()
</script>

<template>
  <div class="home">
    <van-nav-bar title="泓源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <SearchBox></SearchBox>
    <div class="suggests">
      <template v-for="(item, index) in homeStore.hotSuggests" :key="index">
        <div class="tag" :style=" { color: item.tagText.color, background: item.tagText.background.color } ">{{ item.tagText.text }}</div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  background-color: #fff;
  :deep(.van-nav-bar__title) {
    color: var(--parmary-color);
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .suggests {
    display: flex;
    flex-wrap: wrap;
    padding: 2.6667vw 5vw;
    .tag {
      margin: .5333vw 1.3333vw;
      font-size: 3.2vw;
      padding: 1.0667vw 1.6vw;
      border-radius: 3.2vw;
    }
  }

}
</style>
