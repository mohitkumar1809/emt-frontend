import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import loaderReducer from "./reducers/loaderReducer";
import showNavbarReducer from "./reducers/showNavbarReducer";
import sideNavMenuReducer from "./reducers/sideNavMenuReducer";
import activeSideMenuReducer from "./reducers/activeSideMenuReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  showNavbar: showNavbarReducer,
  sideNavMenu: sideNavMenuReducer,
  activeSideMenu: activeSideMenuReducer,
});

const store = createStore(rootReducer);

export { store };
