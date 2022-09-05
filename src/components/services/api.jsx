import axios from "axios";
import { BASE_URL } from "./base";
const api = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});
api.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "*/*",
      "Content-Type": "application/Json",
      "Access-Control-Allow-Origin": `${BASE_URL}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);
export default api;