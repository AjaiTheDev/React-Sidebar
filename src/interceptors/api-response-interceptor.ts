import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../api/axios-client";
import { toast } from "react-toastify";

const errorHandler = (error: AxiosError): Promise<never> => {
  if (error?.response?.data) {
    const errorMsg: string = error?.response?.data as string;
    toast.error(errorMsg, {
      position: "top-right",
    });
  }
  return Promise.reject(error);
};

// Response interceptor for handling common errors (e.g., HTTP 500)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => errorHandler(error)
);

export default axiosInstance;
