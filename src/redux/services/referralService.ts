import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL

export const referralService = createApi({
    reducerPath: 'referralService',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/referrals` }),
    endpoints: (builder) => ({
        getReferrals: builder.query<unknown, void>({
            query: () => ({
                url: '',
                method: 'GET'
            })
        })
    })
})

export const { useGetReferralsQuery } = referralService