// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { authApi } from '@/hooks/UseAuth';
import { contact } from '@/hooks/UseContact';
import { volunteer } from '@/hooks/UseVolunteer';
import { recruitment } from '@/hooks/UseRecruitment';
import authReducer from '@/slice/AuthSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [contact.reducerPath]: contact.reducer,
      [volunteer.reducerPath]: volunteer.reducer,
      [recruitment.reducerPath]: recruitment.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, contact.middleware, volunteer.middleware, recruitment.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Automatically set up listeners to enable caching and refetching
setupListeners(makeStore().dispatch);

export default makeStore;
