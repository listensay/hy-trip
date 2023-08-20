<script setup>
import { useRouter } from "vue-router"
import { computed, ref, toRef } from "vue"
import useCityStore from "@/stores/modules/city"
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home'
import useMainStore from "@/stores/main"
import { storeToRefs } from "pinia"
const router = useRouter()

const getLaction = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res)
  }, (error) => {
    console.log(error)
  })
}

const cityClick = () => {
  router.push({ path: '/city' })
}
// 获取城市名字
const cityStore = useCityStore()
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
console.log( startDate.value, endDate.value)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayDate = ref(getDiffDays(startDate.value, endDate.value))

// 日历显示
const showCalendar = ref(false)
// 日历组件 点击确认的时候
const onConfirm = value => {
  startDate.value = value[0]
  endDate.value = value[1]

  stayDate.value = getDiffDays(value[0], value[1])
  showCalendar.value = false
}

const homeStore = useHomeStore()
homeStore.fetchHomeHotTags()
const searchClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: cityStore.currentCity.cityName
    }
  })
}

</script>

<template>
  <div class="search-box">
    <div class="item location">
      <div class="city" @click="cityClick">{{ cityStore.currentCity.cityName }}</div>
      <div class="mine" @click="getLaction">我的位置 <van-icon color="#fff9854" name="location-o" /></div>
    </div>
    <div class="item stay-date" @click="showCalendar = true">
      <div class="start">
        <div class="tip">入住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="stay">共 {{ stayDate }} 晚</div>
      <div class="end">
        <div class="tip">离店</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="item specification">
      <div class="price">价格不限</div>
      <div class="pLimit">人数不限</div>
    </div>
    <div class="item keyword">关键字/位置/民宿名</div>
    <van-calendar :round="false" color="#ff9854" v-model:show="showCalendar" type="range" @confirm="onConfirm" />
    <div class="suggests">
      <template v-for="(item, index) in homeStore.hotSuggests" :key="index">
        <div class="tag" :style=" { color: item.tagText.color, background: item.tagText.background.color } ">{{ item.tagText.text }}</div>
      </template>
    </div>
    <div class="search-button">
      <van-button type="primary" color="linear-gradient(90deg, #fa8c1d, #fcaf3f)" @click="searchClick" round block>开始搜索</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;


  background-color: #fff;
  .item {
    padding: 2.6667vw 8vw;
    border-bottom: 1px solid #eee;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5.3333vw 8vw;
    .city {
      font-size: 4.5333vw;
    }
  }
  .stay-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tip {
      color: #999;
      font-size: 3.2vw;
      margin-bottom: 1.0667vw;
    }
    .date {
      color: #333;
      font-size: 3.7333vw;
      font-weight: bold;
    }
    .stay {
      color: #999;
      font-size: 3.2vw;
    }
  }
  .specification {
    color: #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8vw;
    height: 10.6667vw;

    .pLimit {
      border-left: 1px solid #eee;
      height: 100%;
      line-height: 10.6667vw;
      padding-left: 5px;
    }
  }
  .keyword {
    padding: 4vw 8vw;
    color: #999;
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

  .search-button {
    padding: 2.6667vw 5vw;
  }
}


</style>
