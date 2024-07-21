import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const recruitment = createApi({
  reducerPath: 'recruitment',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/recruitment/`,
    baseUrl: 'https://api.meriride.com/recruitment/',
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    newRecruitmentRequest: builder.mutation({
      query: (addRecruitment) => ({
        url: '/newDriverRecruitmentRequest',
        method: 'POST',
        body: addRecruitment,
      }),
    }),
    getDriverRecruitmentRequests: builder.query({
      query: () => '/getDriverRecruitmentRequests',
    }),
    getDriverRecruitmentById: builder.query({
      query: (id) => `/getDriverRecruitmentById/${id}`,
    }),
  }),
});


export const {
  useNewRecruitmentRequestMutation,
  useGetDriverRecruitmentRequestsQuery,
  useGetDriverRecruitmentByIdQuery
} = recruitment;
