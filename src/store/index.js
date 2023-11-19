import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./slices/userDetailSlice";

export const store = configureStore({
    reducer: {
        app: userDetail
    }
})