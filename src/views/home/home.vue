<script setup>
import SearchBox from './components/search-box.vue'
import CategoryTab from './components/category-tab.vue'
</script>

<template>
  <div class="home">
    <van-nav-bar title="泓源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <SearchBox></SearchBox>
    <CategoryTab></CategoryTab>
    <div class="content">
      <h2>热门精选</h2>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  --van-tabs-line-height: 60px;

  :deep(.van-nav-bar__title) {
    color: var(--parmary-color);
  }

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
