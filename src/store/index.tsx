import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/LoginSlice';
import getTaskReducer from './slices/getTaskSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    getTask:getTaskReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;