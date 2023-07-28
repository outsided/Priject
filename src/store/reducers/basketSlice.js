import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const isHasProduct = state.products.some(item => item.id === action.payload.id);
      if(isHasProduct) {
        state.products = state.products.map(product => {
          if(product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }
          return product;
        })
      } else {
        state.products.push(action.payload);
      }
    
    },
    removeFromBasket: (state,action) => {
        const daleteProduct = state.products.filter((product ) => product.id !== action.payload )
        state.products = daleteProduct
    },
    changeQuantity: (state,action) => {
     
      state.products = state.products.map(item => {
        if( item.id === action.payload.id){
          return{
            ...item,
            quantity: action.payload.quantity === 0? action.payload.quantity = 1: action.payload.quantity
           }
          }
        return item
      
    })
   },
   countBasked: () => {
    return 4
   },
}
});

export const { addToBasket, removeFromBasket, changeQuantity, countBasked } =
  basketSlice.actions;

export default basketSlice;
