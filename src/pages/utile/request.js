// https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";

var instance = axios.create({
  baseURL: "https://bingjs.com:8003/",
  timeout: 20000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    if (sessionStorage.getItem("token")) {
      config.headers.token = sessionStorage.getItem("token");
    }
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
