import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js"; // Corrected: Changed `useReducer` to `userReducer`
import { persistReducer, persistStore } from "redux-persist"; // Added `persistStore`
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Removed `{ user: persistedReducer }` and directly used `persistedReducer`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // Corrected: Changed `persistorStore` to `persistStore`
