import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import taskReducer from "./features/taskSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session";

// to data persist in app
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers (add more if needed)
const rootReducer = combineReducers({
  todos: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

//export persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
