import axios from "axios";
import { server } from "../../server";

export const getAllUserOrders = (userID) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllOrdersOfUserRequest"
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "withCredentials": true
            }
        };
        const { data } = await axios.get(`${server}/order/get-all-orders/${userID}`, config);
        dispatch({
            type: "getAllOrdersOfUserSuccess",
            payload: data.orders
        })
    } catch (error) {
        dispatch({
            type: "getAllOrdersOfUserFail",
            payload: error.response.data.message
        })
    }
}
export const getAllShopOrders = (sellerID) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllOrdersOfShopRequest"
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "withCredentials": true
            }
        };
        const { data } = await axios.get(`${server}/order/get-seller-all-orders/${sellerID}`, config);
        dispatch({
            type: "getAllOrdersOfShopSuccess",
            payload: data.orders
        })
    } catch (error) {
        dispatch({
            type: "getAllOrdersOfShopFail",
            payload: error.response.data.message
        })
    }
}