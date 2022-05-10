import { configureStore } from '@reduxjs/toolkit'
import cartDisplayReducer from './cartDisplay';
import cartItemsReducer from './cartItems';
import shopItemsReducer from './shopItems';

export const store = configureStore({
  reducer: { cart: cartDisplayReducer, cartItems: cartItemsReducer, shopItems: shopItemsReducer },
})