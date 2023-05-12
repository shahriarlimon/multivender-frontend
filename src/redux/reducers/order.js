import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true
};
export const orderReducer = createReducer(initialState, {
    getAllOrdersOfUserRequest: (state, action) => {
        state.loading = true
    },
    getAllOrdersOfUserSuccess: (state, action) => {
        state.loading = false
        state.orders = action.payload
    },
    getAllOrdersOfUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    getAllOrdersOfShopRequest: (state, action) => {
        state.loading = true
    },
    getAllOrdersOfShopSuccess: (state, action) => {
        state.loading = false
        state.orders = action.payload
    },
    getAllOrdersOfShopFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    clearErrors: (state) => {
        state.error = null;
    }
})