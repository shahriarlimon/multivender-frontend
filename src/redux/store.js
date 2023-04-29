import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './reducers/product';
import { sellerReducer } from './reducers/seller';
import { userReducer } from './reducers/user';
import { eventReducer } from './reducers/event';
import { cartReducer } from './reducers/cart';

const store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer,
        products: productReducer,
        events: eventReducer,
        cart: cartReducer
    }
})

export default store;