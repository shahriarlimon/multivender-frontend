import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
};
export const userReducer = createReducer(initialState, {
    LoadUserRequest: (state) => {
        state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    LoadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    /* update user information */
    updateUserInfoRequest: (state, action) => {
        state.loading = true;
    },
    updateUserInfoSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload

    },
    updateUserInfoFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // update user address
    updateUserAddressRequest: (state) => {
        state.addressloading = true;
    },
    updateUserAddressSuccess: (state, action) => {
        state.addressloading = false;
        state.successMessage = action.payload.successMessage;
        state.user = action.payload.user;
    },
    updateUserAddressFailed: (state, action) => {
        state.addressloading = false;
        state.error = action.payload;
    },

    // delete user address
    deleteUserAddressRequest: (state) => {
        state.addressloading = true;
    },
    deleteUserAddressSuccess: (state, action) => {
        state.addressloading = false;
        state.successMessage = action.payload.successMessage;
        state.user = action.payload.user;
    },
    deleteUserAddressFailed: (state, action) => {
        state.addressloading = false;
        state.error = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
    },
    clearMessages: (state) => {
        state.successMessage = null;
    },
})