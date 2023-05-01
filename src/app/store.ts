import counterSlice from "<component>/features/counter/counterSlice";
import { apiSlice } from "<component>/features/success-story/success-story-api-slice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
