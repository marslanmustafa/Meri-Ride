import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const volunteer = createApi({
  reducerPath: 'volunteer',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/volunteer/`
  }),
  endpoints: (builder) => ({
    newVolunteerRequest: builder.mutation({
      query: (addVolunteer) => ({
        url: '/newVolunteerRequest',
        method: 'POST',
        body: addVolunteer,
      }),
    }),
    getAllVolunteersRequest: builder.query({
      query: () => 'getAllVolunteersRequest',
    }),
    getVolunteerRequestById: builder.query({
      query: (id) => `/getVolunteerRequestById/${id}`,
    })
  }),
});


export const { useNewVolunteerRequestMutation, useGetAllVolunteersRequestQuery, useGetVolunteerRequestByIdQuery } = volunteer;
