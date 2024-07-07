import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { auth } from '@/hooks/UseAuth';
import { contact } from '@/hooks/UseContact';
import { volunteer } from '@/hooks/UseVolunteer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [auth.reducerPath]: auth.reducer,
      [contact.reducerPath]: contact.reducer,
      [volunteer.reducerPath]: volunteer.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(auth.middleware, contact.middleware, volunteer.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Automatically set up listeners to enable caching and refetching
setupListeners(makeStore().dispatch);

export default makeStore;
