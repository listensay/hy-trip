<script setup>
import { ref } from 'vue';
import useMainStore from '@/stores/main.js'
const mainStore = useMainStore()
</script>

<template>
  <div class="loading" v-if="mainStore.loading">
    <van-loading color="#1989fa" />
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .5);
}
</style>
