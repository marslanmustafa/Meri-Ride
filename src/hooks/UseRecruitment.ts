import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const recruitment = createApi({
  reducerPath: 'recruitment',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/recruitment/`
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
