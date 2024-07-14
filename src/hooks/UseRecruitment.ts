import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const recruitment = createApi({
  reducerPath: 'recruitment',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://97.74.95.127:4444/recruitment/' }),
  endpoints: (builder) => ({
    newRecruitmentRequest: builder.mutation({
      query: (addRecruitment) => ({
        url: '/newDriverRecruitmentRequest',
        method: 'POST',
        body: addRecruitment,
      }),
    }),
    getDriverRecruitmentRequests:builder.query({
      query: () => ({
        url: '/getDriverRecruitmentRequests',
        method: 'GET',
      }),
    })
  }),
});


export const { useNewRecruitmentRequestMutation ,useGetDriverRecruitmentRequestsQuery } = recruitment;
