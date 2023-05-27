import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    removeFromBasket: (state) => {
      // TODO
      // state.filter
    },
    changeQuantity: (state) => {
      // TODO
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } =
  basketSlice.actions;

export default basketSlice;
