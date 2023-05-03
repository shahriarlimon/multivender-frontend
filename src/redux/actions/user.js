import axios from 'axios';
import { server } from '../../server';

/* loaduser */
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest"
        })
        const { data } = await axios.get(`${server}/user/getuser`, { withCredentials: true });
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message
        })
    }
}
export const updateUserInfo = (userInfo) => async (dispatch) => {
    try {
        dispatch({
            type: "updateUserInfoRequest"
        })
        const { data } = await axios.put(`${server}/user/update-user-info`, userInfo, { withCredentials: true });
        dispatch({
            type: "updateUserInfoSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "updateUserInfoFail",
            payload: error.response.data.message
        })
    }
}