import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './reducers/product';
import { sellerReducer } from './reducers/seller';
import { userReducer } from './reducers/user';
import { eventReducer } from './reducers/event';
import { cartReducer } from './reducers/cart';
import { wishlistReducer } from './reducers/wishlist';
import { orderReducer } from './reducers/order';

const store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer,
        products: productReducer,
        events: eventReducer,
        cart: cartReducer,
        order: orderReducer,
        wishlist: wishlistReducer
    }
})

export default store;