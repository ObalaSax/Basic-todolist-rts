import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./TodoSlice";

export const myStore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type myRootState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
