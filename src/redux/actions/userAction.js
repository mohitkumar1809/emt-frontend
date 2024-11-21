export const loginUser = (userData) => {
  return {
    type: "LOGIN_USER",
    payload: userData,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
