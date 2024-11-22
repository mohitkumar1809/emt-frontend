import storage from "redux-persist/lib/storage";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./reducers/userReducer";
import loaderReducer from "./reducers/loaderReducer";
import showNavbarReducer from "./reducers/showNavbarReducer";
import sideNavMenuReducer from "./reducers/sideNavMenuReducer";
import activeSideMenuReducer from "./reducers/activeSideMenuReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  showNavbar: showNavbarReducer,
  sideNavMenu: sideNavMenuReducer,
  activeSideMenu: activeSideMenuReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
