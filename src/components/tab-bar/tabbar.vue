<script setup>
import tabbarData from '@/assets/data/tabbarData'
import { getAsstesUrl } from '@/utils/getAsstes'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const currentIndex = ref(0)
const router = useRouter()

const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.path">
      <div class="tab-bar-item" :class="{ active: index === currentIndex }" @click="itemClick(index, item)">
        <img class="icon" v-if="currentIndex !== index" :src="getAsstesUrl(item.image)">
        <img class="icon" v-else :src="getAsstesUrl(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 32px;
    }

    .text {
      margin-top: 3px;
      font-size: 12px;
    }

    &.active{
      .text {
        color: var(--parmary-color);
      }
    }
  }
}
</style>
@/assets/data/tabbarData@/utils/getAsstes