const initialState = {
  showNavbar: true,
};

const showNavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAVBAR":
      return {
        ...state,
        showNavbar: action.payload,
      };
    default:
      return state;
  }
};

export default showNavbarReducer;
