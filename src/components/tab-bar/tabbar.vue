<script setup>
import { ref } from 'vue'
const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
</style>
