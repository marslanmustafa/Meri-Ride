import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { auth } from '@/hooks/UseAuth';
import { contact } from '@/hooks/UseContact';
import { volunteer } from '@/hooks/UseVolunteer';
import { recruitment } from '@/hooks/UseRecruitment';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [auth.reducerPath]: auth.reducer,
      [contact.reducerPath]: contact.reducer,
      [volunteer.reducerPath]: volunteer.reducer,
      [recruitment.reducerPath]: recruitment.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(auth.middleware, contact.middleware, volunteer.middleware, recruitment.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Automatically set up listeners to enable caching and refetching
setupListeners(makeStore().dispatch);

export default makeStore;
