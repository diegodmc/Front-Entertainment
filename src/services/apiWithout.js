import axios from "axios";

const apiWithout = axios.create({
  baseURL: "https://localhost:5001/v1/"
});


apiWithout.interceptors.request.use(async config => {
  
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  };
  config.headers = headers;
  return config;
});

export default apiWithout;