import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true
};
export const eventReducer = createReducer(initialState, {
    eventCreateRequest: (state) => {
        state.loading = true;
    },
    eventCreateSuccess: (state, action) => {
        state.loading = false;
        state.event = action.payload;
        state.success = true
    },
    eventCreateFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false
    },

    getEventsRequest: (state, action) => {
        state.loading = true
    },
    getEventsSuccess: (state, action) => {
        state.loading = false
        state.events = action.payload
    },
    getEventsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    getAllEventsRequest: (state, action) => {
        state.loading = true
    },
    getAllEventsSuccess: (state, action) => {
        state.loading = false;
        state.allEvents = action.payload
    },
    getAllEventsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deleteEventRequest: (state, action) => {
        state.loading = true
    },
    deleteEventSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    deleteEventFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    clearErrors: (state) => {
        state.error = null;
    }
})