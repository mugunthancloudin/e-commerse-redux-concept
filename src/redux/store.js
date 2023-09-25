import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/productSlice";

export const Store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
