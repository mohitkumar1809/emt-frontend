const initialState = { nav: "Dashboard", subNav: "" };

const activeSideMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SIDEBAR_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default activeSideMenuReducer;
