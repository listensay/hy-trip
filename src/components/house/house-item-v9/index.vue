<script setup>
import { ref } from "vue";

const props = defineProps({
  houseItemData: {
    type: Object,
    default: () => ({})
  }
})

const value = ref(Number(props.houseItemData.data.commentScore));
</script>

<template>
  <div class="house-item">
    <div class="bg">
      <img :src="houseItemData.data.image.url" alt="">
    </div>
    <div class="info">
      <div class="desc">{{ houseItemData.data.summaryText }}</div>
      <div class="title">{{ houseItemData.data.houseName }}</div>
      <div class="layout">
        <div class="rate"><van-rate v-model="value" allow-half color="#fff" :size="15"/></div>
        <div class="price"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  position: relative;
  border-radius: 1.3333vw;
  overflow: hidden;
  .bg {
    img {
      width: 100%;
    }
  }
  .info {
    position: absolute;
    padding: 2.6667vw;
    width: 100%;
    left: 0;
    bottom: 0;
    color: #fff;
    box-sizing: border-box;

    .desc {
      font-size: 3.2vw;
      margin-bottom: 1.3333vw;
    }
    .title {
      margin-bottom: 1.3333vw;
      font-size: 3.7333vw;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .layout {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
