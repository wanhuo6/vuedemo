import axios from 'axios'
import qs from 'Qs'

//withCredentials 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
/**
 * 创建axios实例
 */
const axiosCore = axios.create({
  baseUrl: process.env.TEST_URL,
  timeout: 10000 //请求超时时间
})
//request 拦截器==>对请求参数做处理
axiosCore.interceptors.request.use(
  config => {
    config.method === 'post' ? config.data = qs.stringify(config.param) : config
    config.param = null;
    config.headers['Content-Type'] = 'post' ? 'application/x-www-form-urlencoded' : 'application/json;charset=utf-8'
    return config;
  }, error => {
    Promise.reject(error)
  }
)
export default axiosCore


