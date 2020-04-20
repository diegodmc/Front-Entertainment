import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://localhost:5001/v1/"
});

api.interceptors.request.use(async config => {
  const token = JSON.parse(getToken());
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization' : 'Bearer '+ token
  };
  if (token) {
    
    config.headers = headers;
  }
  return config;
});

export default api;