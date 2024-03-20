import axios from "axios";
import { kEnv } from "../constans/env";

export const axiosInstance = () => {
  const apiEndPoint = kEnv.NEXT_PUBLIC_BASE_URL;
  axios.defaults.baseURL = apiEndPoint;

  return axios;
};
