const initialState = {
  loader: true,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;