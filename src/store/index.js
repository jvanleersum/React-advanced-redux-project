import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { hasItem: false, cartItem: null, showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, actions) {
      const item = actions.payload;
      if (state.cartItem == null) {
        state.cartItem = item;
      } else {
        state.cartItem.quantity += 1;
        state.cartItem.total += item.price
      }
      ;
      state.hasItem = true;
    },
    removeItem(state) {
      if (state.cartItem.quantity > 1) {
      state.cartItem.quantity -= 1
      state.cartItem.total -= state.cartItem.price
      } else {
        state.cartItem = null
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
