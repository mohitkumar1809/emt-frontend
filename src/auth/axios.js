import axios from "axios";
import { EMT_URL } from "../../constants/constant";

const baseURL = EMT_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
