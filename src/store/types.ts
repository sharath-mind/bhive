import { ThunkAction, Action } from "@reduxjs/toolkit";
import { store } from ".";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type LandingPage = {
  data: any[];
  pending: boolean,
  error: boolean
};
