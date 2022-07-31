import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { photosAPI } from "./api";
import UserReducers from "./UserSlice";
const rootReducer = combineReducers({
  UserReducers,
  [photosAPI.reducerPath]: photosAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(photosAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
