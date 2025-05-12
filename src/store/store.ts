import { configureStore } from "@reduxjs/toolkit";
import { bugsReducer } from "../bug/slice/bugSlice";

const store = configureStore({ reducer: { bugsReducer } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
