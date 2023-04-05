import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
};
export const sellerReducer = createReducer(initialState, {
    LoadSellerRequest: (state) => {
        state.loading = true;
    },
    LoadSellerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.seller = action.payload;
    },
    LoadSellerFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    ClearErrors: (state) => {
        state.error = null;
    }
})