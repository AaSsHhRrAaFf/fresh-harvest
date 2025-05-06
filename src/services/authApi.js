// src/app/services/authApi.js
"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-fresh-harvest.code-commando.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      // Get token from state if available
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "users/register",
        method: "POST",
        body: userData,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "auth/change-password",
        method: "PUT",
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
} = authApi;
