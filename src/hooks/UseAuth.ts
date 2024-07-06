import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const auth = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://97.74.95.127:4000/auth/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/getAllUsers',
    }),
  }),
});


export const { useGetAllUsersQuery } = auth;
