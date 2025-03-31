import axios from "axios";
import { BASE_URL } from "../../../constants.ts";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (
      config?.data?.readOnly &&
      (config.method?.toUpperCase() === "PATCH" ||
        config.method?.toUpperCase() === "POST")
    ) {
      return Promise.reject({
        message:
          "Auto save is not allowed for read only profile users or if the milestone is beyond 2A",
        status: 405,
        config,
      });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
