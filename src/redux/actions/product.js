import axios from 'axios';
import { server } from '../../server';

/* create product */
export const createProduct = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "productCreateRequest"
        })
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "withCredentials": true
            }
        };
        const { data } = await axios.post(`${server}/product/create-product`, newForm, config);
        dispatch({
            type: "productCreateSuccess",
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: "productCreateFail",
            payload: error.response.data.message
        })
    }
}

/* get all shop products */
export const getAllShopProducts = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getProductsRequest"
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "withCredentials": true
            }
        };
        const { data } = await axios.get(`${server}/product/get-all-product-shop/${id}`, config);
        dispatch({
            type: "getProductsSuccess",
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: "getProductsFail",
            payload: error.response.data.message
        })
    }
}

/* delete product from shop */
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest"
        })
        const { data } = await axios.delete(`${server}/product/delete-shop-product/${id}`, { withCredentials: true });
        dispatch({
            type: "deleteProductSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "deleteProductFail",
            payload: error.response.data.message
        })
    }

}