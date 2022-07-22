import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    updateCart(state, action) {
      if (action.payload.cartItems) {
        state.cartItems = action.payload.cartItems
        state.totalQuantity = action.payload.totalQuantity
      } else {
        state = initialCartState
      }
    },
    addItem(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      } else {
        state.cartItems.push(newItem);
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export default cartSlice;
