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