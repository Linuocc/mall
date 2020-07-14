import axios from "axios"

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })

  //2.请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  //3.响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  // 返回promise对象
  return instance(config)
}
