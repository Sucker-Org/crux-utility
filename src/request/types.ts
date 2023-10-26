import { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from "axios";

export type RequestInterceptors = {

    requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestInterceptorsCatch?: (err: any) => any

    responseInterceptors?: <T = AxiosResponse>(config: T) => T
    responseInterceptorsCatch?: (err: any) => any
}
/* export interface RequestConfig extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors
} */
export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
}
