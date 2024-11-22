import axiosInstance from "../axios";

const loginUser = (userData) => {
  return axiosInstance.post("/v1/authenticate", { ...userData });
};

const logInService = {
  loginUser,
};

export default logInService;
