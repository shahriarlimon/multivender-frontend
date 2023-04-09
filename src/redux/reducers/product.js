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

    getShopProductsRequest: (state, action) => {
        state.loading = true
    },
    getShopProductsSuccess: (state, action) => {
        state.loading = false
        state.products = action.payload
    },
    getShopProductsFail: (state, action) => {
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
    // get all products
    getAllProductsRequest: (state) => {
        state.loading = true;
    },
    getAllProductsSuccess: (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
    },
    getAllProductsFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})