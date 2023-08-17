<script setup>
import SearchBox from './components/home-search-box.vue'
import CategoryTab from './components/home-category-tab.vue'
import Content from './components/home-content.vue'
import useScroll from '@/hook/useSroll'
import { computed, ref, watch } from 'vue'

const { scrollTop } = useScroll()

const showSearchBar = computed(() => {
  return scrollTop.value > 100
})

const value = ref('')
</script>

<template>
  <div class="home">
    <van-nav-bar title="泓源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <SearchBox></SearchBox>
    <CategoryTab></CategoryTab>
    <van-search v-show="showSearchBar" v-model="value" placeholder="请输入搜索关键词" />
    <Content></Content>
  </div>
</template>

<style lang="less" scoped>
.home {
  --van-tabs-line-height: 60px;
  .van-search {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 0px 10px #0000004a;
  }

  :deep(.van-nav-bar__title) {
    color: var(--parmary-color);
  }

  .banner {
    img {
      width: 100%;
    }
  }
  padding-bottom: 50px;
}
</style>
