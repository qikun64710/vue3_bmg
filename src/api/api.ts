import axios , { AxiosInstance,AxiosRequestConfig,AxiosResponse } from "axios";
import qs from 'qs'
import { showMessage } from './status';
import { ElMessage } from 'element-plus';

const service:AxiosInstance = axios.create({
    baseURL:process.env.VUE_APP_ENV === 'development' ? process.env.VUE_APP_BASE_API : 'http://124.222.12.80:3001//',
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },
});
// 请求拦截
service.interceptors.request.use((config:AxiosRequestConfig) => {
    //获取token，并将其添加至请求头中
    const token = localStorage.getItem('token')
    if(token){
      config.headers!.Authorization = `${token}`;
    }
    return config;
  }, (error:any) => {
    return Promise.reject(error);
})
// 响应拦截
service.interceptors.response.use(
    (response:AxiosResponse)=>{
        if(response.headers.authorization){
            localStorage.setItem('token',response.headers.authorization);
        }else{
            if(response.data && response.data.token){
                localStorage.setItem('token',response.data.token);
            }
        }
        if(response.status === 200){
            return  response;
        }else{
            showMessage(response.status)
            return response;
        }
    },
    // 请求失败
    (err:any)=>{
        const { response } = err;
        if(response){
            showMessage(response.status);
            return Promise.reject(response.data);
        }else{
            ElMessage.warning('网络连接异常，请稍后再试！')
        }
    }
)
export default service