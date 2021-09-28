import axios from "axios";
// let base_url = 'http://127.0.0.1:8000'
// export const toLogin = (params) => {
//     return axios.post(base_url + '/api-auth/token/', params)
// }
//
// export const getUserInfo = () => {
//     return axios.get( base_url + '/api/v1/users')
// }
//
// export const getUserBookcase = () => {
//     return axios.get('http://127.0.0.1:8000/api/v1/bookcase')
// }
//
// export const getUserProfile = (param) => {
//
// }
// export const getBookPublic = (bookId) =>{
//     return axios.get('${host}/api/v1/book/${bookId}')
// }

import {networkConfig} from './index'

// 创建axios实例
export function requestService(config) {
    const service = axios.create({
        // axios中请求配置有baseURL选项，表示请求URL公共部分
        baseURL: networkConfig.serverUrl,
        // 超时
        timeout: networkConfig.requestTimeout
    })
    // request拦截器
    service.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
        Promise.reject(error)
    })

    // 响应拦截器
    service.interceptors.response.use(res => {
            console.log(res)
        },
        error => {
            return Promise.reject(error)
        }
    )
    return service(config)
}

export default requestService;
