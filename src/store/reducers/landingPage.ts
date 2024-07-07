import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LandingPage, RootState } from "../types";
import { getLandingPageDataAction } from "../actions/landingPage";

const initialState: LandingPage = {
  data: [],
  pending: false,
  error: false,
};

export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLandingPageDataAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(getLandingPageDataAction.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.error = false;
        state.data = payload.data;
      })
      .addCase(getLandingPageDataAction.rejected, (state) => {
        state.error = true;
      });
  },
});

export const getLandingPageData = (state: RootState) => state.landingPageReducer.data;
