import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";
import { Company, LoginDto, LoginToken, User } from '../interfaces'

const baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const authToken = Cookies.get("authToken");
            if (authToken) headers.set('Authorization', `Bearer ${authToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            queryFn: async () => {
                return {
                    data: {
                        id: '123',
                        firstname: 'Funsho',
                        lastname: 'Ajayi',
                        email: 'johndoe@example.com',
                        role: 'ADMIN',
                        phone_number: "08078559693",
                        alt_phone_number: "6456351688663",
                    }
                };
            },
        }),
        getCompany: builder.query<Company, void>({
            queryFn: () => {
                return {
                    data: {
                        id: '1234',
                        name: 'Funsho\'s Foster care',
                        license: 'asd-234sdf-3233',
                        type: 'Foster Care',
                        address: 'No 19 assess avenue alberta',
                        city: 'Edmonton',
                        province: 'AB',
                        postal_code: '115143'
                    }
                };
            },
        }),
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
export const { useGetUserQuery, useGetCompanyQuery, useLoginMutation, useSignupMutation } = userApi