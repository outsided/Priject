import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer,
  },
});
