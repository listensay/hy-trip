import Request from "@/service/request";

export const getHomeHotTags = () => {
  return Request.get({
    url: '/home/hotSuggests'
  })
}

export const getHomeCategories = () => {
  return Request.get({
    url: '/home/categories'
  })
}

export const getHomeHouseList = (page = 1) => {
  return Request.get({
    url: `/home/houselist/?page=${page}`
  })
}
