<script setup>
const props = defineProps({
  houseItemData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="house-item">
    <div class="cover">
      <img :src="houseItemData.data.image.url">
    </div>
    <div class="info">
      <div class="location"><van-icon name="location-o" /> {{ houseItemData.data.location }}</div>
      <div class="title">{{ houseItemData.data.houseName }}</div>
      <div class="desc">{{ houseItemData.data.summaryText }}</div>
      <div class="price">
        <span class="newPrice">¥ {{ houseItemData.data.finalPrice }}</span>
        <span class="oldPrice">¥ {{ houseItemData.data.productPrice }}</span>
        <span class="discount" :style="{ color: houseItemData?.data?.priceTipBadge?.color }">{{ houseItemData?.data?.priceTipBadge?.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  overflow: hidden;
  border-radius: 1.3333vw;

  .cover {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
  .info {
    padding: 1.3333vw;
    line-height: 1.6;
    .location {
      font-size: 3.2vw;
      color: #666;
    }
    .title {
      font-size: 3.7333vw;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
    .desc {
      font-size: 3.2vw;
      color: #666;
    }
    .price {
      .newPrice {
        color: #ff9854;
      }
      .discount {
        display: inline-block;
        padding: .2667vw 1.0667vw;
        font-size: 3.2vw;
        line-height: 1;
        border-radius: 2.6667vw;
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
      }
      .oldPrice {
        margin: 0 0.8vw;
        color: #999;
        font-size: 3.2vw;
        text-decoration: line-through;
    
      }
    }

  }
}
</style>
