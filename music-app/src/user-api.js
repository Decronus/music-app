import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/user",
  }),
  endpoints: (builder) => ({
    // signUp: builder.mutation({
    // 	query: (email, password) => ();
    // })
  }),
});

export const { useSignUpQuery } = userApi;
