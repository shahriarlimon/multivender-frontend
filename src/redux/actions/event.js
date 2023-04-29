import axios from 'axios';
import { server } from '../../server';

/* create product */
export const createEvent = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "eventCreateRequest"
        })
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "withCredentials": true
            }
        };
        const { data } = await axios.post(`${server}/event/create-event`, newForm, config);
        dispatch({
            type: "eventCreateSuccess",
            payload: data.event
        })
    } catch (error) {
        dispatch({
            type: "eventCreateFail",
            payload: error.response.data.message
        })
    }
}

export const getAllShopEvents = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getEventsRequest"
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "withCredentials": true
            }
        };
        const { data } = await axios.get(`${server}/event/get-all-events/${id}`, config);
        dispatch({
            type: "getEventsSuccess",
            payload: data.events
        })
    } catch (error) {
        dispatch({
            type: "getEventsFail",
            payload: error.response.data.message
        })
    }
}

export const getAllEvents = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllEventsRequest"
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "withCredentials": true
            }
        };
        const { data } = await axios.get(`${server}/event/get-all-events`, config);
        dispatch({
            type: "getAllEventsSuccess",
            payload: data.events
        })
    } catch (error) {
        dispatch({
            type: "getAllEventsFail",
            payload: error.response.data.message
        })
    }
}


export const deleteEvent = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteEventRequest"
        })
        const { data } = await axios.delete(`${server}/event/delete-event-product/${id}`, { withCredentials: true });
        dispatch({
            type: "deleteEventSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "deleteEventFail",
            payload: error.response.data.message
        })
    }

}