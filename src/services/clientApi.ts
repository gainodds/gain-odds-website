import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";
import { Client } from '../interfaces'

const baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const authToken = Cookies.get("authToken");
            if (authToken) headers.set('Authorization', `Bearer ${authToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getClient: builder.query<Client, void>({
            queryFn: () => {
                return {
                    data: {
                        id: '123',
                        firstname: 'Johnny',
                        lastname: 'Doe',
                        email: 'johndoe@example.com',
                        status: 'active',
                        dob: '1999-06-29',
                        id_number: 'dsf1ds1f541d5',
                        cip: 'dsfds',
                        cip_office: 'Alberta',
                        cfs_status: ['ICO', 'TGO'],
                        supervisor: "Tony",
                        lastest_report: "today",
                    }
                };
            },
        }),
        getAllClients: builder.query<Client[], void>({
            queryFn: () => {
                return {
                    data: [
                        {
                            id: '123',
                            firstname: 'Johnny',
                            lastname: 'Doe',
                            email: 'johndoe@example.com',
                            status: 'active',
                            dob: '1999-06-29',
                            id_number: 'dsf1ds1f541d5',
                            cip: 'dsfds',
                            cip_office: 'Alberta',
                            cfs_status: ['ICO', 'TGO'],
                            supervisor: "Tony",
                            lastest_report: "today",
                        },
                        {
                            id: '124',
                            firstname: 'James',
                            lastname: 'Ferguson',
                            email: 'jamesferguson@gmail.com',
                            status: 'Inactive',
                            dob: '1996-02-22',
                            id_number: 'dsf1ds1fdswe541d5',
                            cip: 'dsfdes',
                            cip_office: 'Alberta',
                            cfs_status: ['ICO'],
                            supervisor: "Funsho",
                            lastest_report: "yesterday",
                        }
                    ]
                };
            },
        }),
        // deleteUser: builder.mutation<unknown, string>({
        //     query: (id) => ({
        //         url: 'users/' + id,
        //         method: 'DELETE'
        //     })
        // }),
    }),
});

// Export the auto-generated hooks for making requests
export const { useGetClientQuery, useGetAllClientsQuery } = clientApi