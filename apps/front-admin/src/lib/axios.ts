import axios from "axios";
import { clientEnv } from "@/config/clientEnv";
import { globalStore } from "@/store/auth.store";

export const networkClient = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_BASE_URL,
});

networkClient.interceptors.request.use((config) => {
  const token = globalStore.getState().user?.token;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});
