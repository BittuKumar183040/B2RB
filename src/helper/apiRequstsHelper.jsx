import axios from "axios";
import { getUserFromLocal } from "./localstorageHelper";

const backendAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});


const interceptor = async (config) => {
  config.headers.userId = getUserFromLocal()?.id;
  return config;
};

backendAPI.interceptors.request.use(interceptor);



export default backendAPI;