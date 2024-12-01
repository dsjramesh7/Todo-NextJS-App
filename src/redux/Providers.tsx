"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/es/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading....</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
