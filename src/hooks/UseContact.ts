import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contact = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://97.74.95.127:4444/contact/' }),
  endpoints: (builder) => ({
    contactUsRequest: builder.mutation({
      query: (sendContact) => ({
        url: '/contactUsRequest',
        method: 'POST',
        body: sendContact,
      }),
    }),
  }),
});


export const { useContactUsRequestMutation } = contact;
