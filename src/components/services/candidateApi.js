import axios from "axios";
import { BASE_URL } from "./base";
const candidateApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});
candidateApi.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "*/*",
      "Content-Type": "application/Json",
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
candidateApi.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);
export default candidateApi;