import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import CategorySlice from "../Slices/CategorySlice";
import ProductSlice from "../Slices/ProductSlice";

const Store = configureStore({
  reducer: {
    userState: AuthSlice,
    categoryState: CategorySlice,
    produtState: ProductSlice,
  },
});

export default Store;
