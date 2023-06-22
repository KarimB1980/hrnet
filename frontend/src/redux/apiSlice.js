import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:3000/api" 
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => '/employee',
      providesTags: ['Post'],
    }),
    createEmployee: builder.mutation({
      query: (payload) => ({
        url: '/employee',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetAllEmployeesQuery,useCreateEmployeeMutation } = apiSlice;