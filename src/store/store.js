// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../services/authApi';
import authReducer from '../feature/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    
    getDefaultMiddleware().concat(authApi.middleware),
});
console.log(typeof authApi.middleware); // Should log 'function'

setupListeners(store.dispatch);
