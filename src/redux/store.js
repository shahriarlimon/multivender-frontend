import { configureStore } from '@reduxjs/toolkit';
import { sellerReducer } from './reducers/seller';
import { userReducer } from './reducers/user';

const store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer
    }
})

export default store;