import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://localhost:44356/api"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers = headers;
  }
  return config;
});

export default api;