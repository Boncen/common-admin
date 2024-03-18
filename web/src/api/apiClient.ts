import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { isEmpty } from "ramda";
import { Result } from "#/api";
import { ResultEnum } from "#/enum";
import { t } from "i18next";
import { Notification } from "@douyinfe/semi-ui";
import { getStringItem } from "@/utils/storage";


const token = getStringItem("token");

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求被发送之前做些什么
    config.headers.Authorization = "Bearer Token " + token;
    return config;
  },
  (error) => {
    // 请求错误时做些什么
    return Promise.reject(error);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    // if (!res.data) throw new Error(t('sys.api.apiRequestFailed'));
    if (!res.data) throw new Error(t("sys.api.apiRequestFailed"));
    const { status, data, message } = res.data;
    
    // 业务请求成功
    const hasSuccess =
      Reflect.has(res.data, "status") && status === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return data;
    }
    // 业务请求错误
    Notification.error({
      title: t("sys.api.errorTip"),
      content: message || t("sys.api.apiRequestFailed"),
      duration: 3,
    });
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};
    let errMsg = "";
    try {
      errMsg = response?.data?.message || message;
    } catch (error) {
      throw new Error(error as unknown as string);
    }
    // 对响应错误做点什么
    if (isEmpty(errMsg)) {
      // checkStatus
      // errMsg = checkStatus(response.data.status);
      errMsg = t("sys.api.errorMessage");
    }
    Notification.error({
      title: t("sys.api.errorTip"),
      content: errMsg,
      duration: 3,
    });
    // Message.error(errMsg);
    return Promise.reject(error);
  }
);

class APIClient {
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}
export default new APIClient();
