import axios from "axios";
import { ElMessage } from "element-plus";
const request = axios.create({
  baseURL: "https://www.fastmock.site/mock/c8db992d32690bfb0dec5500561eba7c/api",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code != 200) {
      return Promise.reject(new Error(res.ElMessage || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    ElMessage({
      message: error.ElMessage,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default request;
