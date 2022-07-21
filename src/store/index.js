import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], totalQuantity: 0, hasItems:false, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity ++;
        existingItem.total += newItem.price
      } else {
        state.cartItems.push(newItem);
      };
      state.totalQuantity ++;
      state.hasItems = true;
    },
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.cartItems.find(item => item.id === id)
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id)
      } else {
        existingItem.quantity --;
        existingItem.total -= existingItem.price
      };
      state.totalQuantity --;
      state.hasItems = state.totalQuantity > 0;
    }
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
