import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import taskReducer from "./features/taskSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
