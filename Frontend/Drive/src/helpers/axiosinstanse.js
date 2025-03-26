import axios from "axios";
const BASE_URL = "http://localhost:8028/api/v1/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // timeout: 10000,
});

export default axiosInstance;