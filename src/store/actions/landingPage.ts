import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLandingPageData } from "../../util";

export const getLandingPageDataAction: any = createAsyncThunk("landing_page/data", async (params: any) => {
    const responce =  await fetchLandingPageData();
    return responce;
})