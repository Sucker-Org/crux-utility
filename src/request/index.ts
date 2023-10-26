import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RequestConfig, RequestInterceptors } from "./types";

export class Request {
    instance: AxiosInstance
    interceptors?: RequestInterceptors
    
    constructor(config: RequestConfig) {

        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return config;
            },
            (err: any) => err
        );

        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptors,
            this.interceptors?.requestInterceptorsCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptors,
            this.interceptors?.responseInterceptorsCatch
        );

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res.data;
            },
            (err: any) => err
        );
    }

    request<T = any>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then(res => {
                    if (config.interceptors?.responseInterceptors) {
                        res = config.interceptors.responseInterceptors<T>(res);
                    }
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }
}
