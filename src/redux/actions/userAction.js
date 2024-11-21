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

export const resetState = () => ({
  type: "RESET_STATE",
});

export const setSideNavMenu = (data) => {
  return {
    type: "SET_SIDE_NAV_MENU",
    payload: data,
  };
};

export const setActiveSideNavMenu = (data) => {
  return {
    type: "SET_ACTIVE_SIDEBAR_MENU",
    payload: data,
  };
};

export const setNavbar = (navbar) => {
  return {
    type: "TOGGLE_NAVBAR",
    payload: navbar,
  };
};
