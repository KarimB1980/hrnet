// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./redux/apiSlice";

// // export const store = configureStore({
// //   reducer: {
// //     [employeesApi.reducerPath]: employeesApi.reducer
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware().concat(employeesApi.middleware),
// // });


// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     // Add your other reducers here
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(apiSlice.middleware),
//   })


import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './redux/apiSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)