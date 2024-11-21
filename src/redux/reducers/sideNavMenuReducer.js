const initialState = [];

const sideNavMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIDE_NAV_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default sideNavMenuReducer;
