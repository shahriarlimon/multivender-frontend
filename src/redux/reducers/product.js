import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true
};
export const productReducer = createReducer(initialState, {
    productCreateRequest: (state) => {
        state.loading = true;
    },
    productCreateSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.success = true
    },
    productCreateFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false
    },

    getProductsRequest: (state, action) => {
        state.loading = true
    },
    getProductsSuccess: (state, action) => {
        state.loading = false
        state.products = action.payload
    },
    getProductsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    deleteProductRequest: (state, action) => {
        state.loading = true
    },
    deleteProductSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    deleteProductFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    clearErrors: (state) => {
        state.error = null;
    }
})