import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromBasket: (state) => {
      // TODO
      // state.filter
    },
    changeQuantity: (state) => {
      // TODO
      console.log("changeQuantity state", state);
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } =
  basketSlice.actions;

export default basketSlice;
