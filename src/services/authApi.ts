import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import Cookies from "js-cookie";
import { LoginDto, LoginToken  } from '../interfaces'

const baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        // deleteUser: builder.mutation<unknown, string>({
        //     query: (id) => ({
        //         url: 'users/' + id,
        //         method: 'DELETE'
        //     })
        // }),
        signup: builder.mutation<LoginToken, LoginDto>({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body
            }),
        }),

        login: builder.mutation<LoginToken, LoginDto>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            }),
        }),
    }),
});

// Export the auto-generated hooks for making requests
export const { useLoginMutation, useSignupMutation } = authApi