import axios from "axios";

// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_APP_BASE_URL,
  headers: {},
  timeout: 4000,
});

axiosInstance.interceptors.response.use(
  (response) => {},
  (error) => {}
);
export default axiosInstance;
