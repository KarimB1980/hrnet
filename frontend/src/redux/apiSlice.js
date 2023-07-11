import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// creation of apiSlice
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:3000/api" 
  }),
  tagTypes: ['Employee'],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => '/employee',
      providesTags: ['Employee'],
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
    }),
    getAllStates: builder.query({
      query: () => '/state',
      providesTags: ['Employee'],
    }),
    getAllDepartments: builder.query({
      query: () => '/department',
      providesTags: ['Employee'],
    }),
    invalidatesTags: ['Employee'],
  }),
})

export const { useGetAllEmployeesQuery,useCreateEmployeeMutation,useGetAllStatesQuery,useGetAllDepartmentsQuery } = apiSlice;