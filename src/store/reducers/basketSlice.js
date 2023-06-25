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
    removeFromBasket: (state,action) => {
      
        const daleteProduct = state.products.filter((product ) => product.id !== action.payload )
        state.products = daleteProduct
    },
    changeQuantity: (state,action) => {
      
      state.products = state.products.map(item => {
        if(item.id === action.payload.id) {
        return{
        ...item,
         quantity: action.payload.quantity
          }
        }
        return item
      })
  },
  
}
});

export const { addToBasket, removeFromBasket, changeQuantity } =
  basketSlice.actions;

export default basketSlice;
