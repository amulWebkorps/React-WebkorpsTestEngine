import axios from "axios";
//import ENV from "../../config/env";

//const token = localStorage.getItem("token");
//console.log(token, "----IN TKN----");
const BASE_URL = `http://localhost:8085`;
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
      "Access-Control-Allow-Origin": "http://localhost:8085",
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
