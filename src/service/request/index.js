import axios from "axios";
import { baseURL, TIMEOUT } from "./config";
import useMainStore from "@/stores/main";
import { storeToRefs } from "pinia";
const mainStore = useMainStore()
const { loading } = storeToRefs(mainStore)
class Request {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    });

    this.instance.interceptors.request.use(config => {
      loading.value = true
      return config
    }, (error) => {
      loading.value = true
      return error
    })

    this.instance.interceptors.response.use(
      res => {
        loading.value = false
        return res
      },
      error => {
        loading.value = false
        return error
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("request err:", err);
          reject(err);
        })
        .finally(() => {
          // loadingStore.changeLoading(false);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new Request(baseURL);
