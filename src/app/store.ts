import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    modal:modalSlice
  },
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;
