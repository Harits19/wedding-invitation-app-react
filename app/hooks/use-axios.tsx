import axios from "axios";

export const useAxios = () => {
  const apiEndPoint = "http://localhost:8080";
  axios.defaults.baseURL = apiEndPoint;

  return axios;
};
