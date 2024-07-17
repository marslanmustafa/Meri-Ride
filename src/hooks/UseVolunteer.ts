import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const volunteer = createApi({
  reducerPath: 'volunteer',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}/volunteer/`
  }),
  endpoints: (builder) => ({
    newVolunteerRequest: builder.mutation({
      query: (addVolunteer) => ({
        url: '/newVolunteerRequest',
        method: 'POST',
        body: addVolunteer,
      }),
    }),
  }),
});


export const { useNewVolunteerRequestMutation } = volunteer;
