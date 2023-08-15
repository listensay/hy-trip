import Request from "@/service/request";

export const getHomeHotTags = () => {
  return Request.get({
    url: '/home/hotSuggests'
  })
}
