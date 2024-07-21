import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const volunteer = createApi({
  reducerPath: 'volunteer',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/volunteer/`,
    baseUrl: 'https://api.meriride.com/volunteer/',
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
