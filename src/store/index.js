import { configureStore, createSlice } from "@reduxjs/toolkit";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const initialCartState = { hasItem: false, cartItem: {titl: "", price: 0, total: 0, quantity:0}, showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, actions) {
      const item = actions.payload;
      if (state.hasItem) {
        state.cartItem.quantity += 1;
        state.cartItem.total += item.price
      } else {
        state.cartItem = item;
        state.hasItem = true;
      }
      ;
    },
    removeItem(state) {
      if (state.cartItem.quantity > 1) {
      state.cartItem.quantity -= 1
      state.cartItem.total -= state.cartItem.price
      } else {
        state.cartItem = {title: "", price: 0, total: 0, quantity:0}
        state.hasItem = false
      }
    }
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
