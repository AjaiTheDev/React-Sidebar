import axios, { AxiosInstance } from "axios";

// Axios instance for making requests
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
