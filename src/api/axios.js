// 二次封装axios
import axios from "axios";

// 引入仓库userStore
import userStore from '@/store/model/user'
let requests = axios.create({
    // baseURL: '/api',
    timeout: 5000
})

// 添加请求拦截器
requests.interceptors.request.use((config) => {
    console.log('在发送请求之前做些什么')
    // 在发送请求之前做些什么
    // 请求公共参数：请求头设置：游客id、token。（都必须）
    let userInfo = userStore(); // 仓库
    let uuid_token = userInfo.uuid_token // 
    let token = userInfo.token
    // 游客id
    if (uuid_token) {
        config.headers.userTempId = uuid_token
    }
    // token
    if (userInfo.token) {
        config.headers.token = token
    }
    // 获取创建的sotre实例
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default requests