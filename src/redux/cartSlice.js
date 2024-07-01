// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      // aca busco si el producto ya está en el carrito
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        // si existe un roducto en el carrito aumenta la cantidad según la cantidad seleccionada
        existingItem.quantity += newItem.quantity;
      } else {
        // y si no exist agrega el producto con la cantidad seleccionada
        state.items.push({ ...newItem });
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
