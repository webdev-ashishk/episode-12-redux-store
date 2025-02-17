import { createSlice } from '@reduxjs/toolkit';

function currentItemsId(cId) {
  console.log(cId);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop(action.payload);
      state.items.filter(currentItemsId(action.payload));
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
