export const setLoaderState = (isLoader) => {
  return {
    type: "SET_LOADER",
    payload: isLoader,
  };
};
