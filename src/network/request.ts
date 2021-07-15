// 引入axios以及一些类型
import axios, {
  AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise,
} from 'axios';
import responseInterceptor from './Interceptors/responseInterceptor';

export default (config: AxiosRequestConfig):AxiosPromise => {
// 配置全局参数
  const cfg: AxiosRequestConfig = {
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
    },
  };

  const instance: AxiosInstance = axios.create(cfg);

  // 配置请求拦截器
  instance.interceptors.request.use((res: AxiosRequestConfig) => res);

  // 配置响应拦截器
  // eslint-disable-next-line max-len
  instance.interceptors.response.use((res: AxiosResponse) => Promise.resolve(responseInterceptor(res)));

  return instance(config);
};
