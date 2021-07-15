import { AxiosResponse } from 'axios';

export default (response: AxiosResponse) => {
  const { status } = response;
  const { errCode } = response.data;
  // 如果http响应状态码response.status正常，则直接返回数据
  if (status === 200 && errCode === 0) {
    return response.data;
  }
  //    当请求状态码和后端返回的errCode异常
  //    其他处理操作
  return errCode;
};
