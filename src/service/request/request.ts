// import axios, { AxiosResponse } from 'axios'
// import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// interface CYResquestInterceptors {
//   requestInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch: (error: any) => any
//   responseInterceptor: (res: AxiosResponse) => AxiosResponse
//   responseInterceptorCatch: (error: any) => any
// }

// interface CYResultConfig extends AxiosRequestConfig {
//   interceptors: CYResquestInterceptors
// }

// class CJRequest {
//   instance: AxiosInstance
//   interceptors: CYResquestInterceptors

//   constructor(config: CYResultConfig) {
//     this.instance = axios.create(config)
//     this.interceptors = config.interceptors

//     this.instance.interceptors.request.use()
//   }

//   request(config: AxiosRequestConfig) {
//     this.instance.request(config).then((res) => {
//       console.log(res)
//     })
//   }
// }

// export default CJRequest
