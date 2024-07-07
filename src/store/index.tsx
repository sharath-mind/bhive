import { combineReducers } from "redux";
import { landingPageSlice } from "./reducers/landingPage";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  landingPageReducer: landingPageSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };
