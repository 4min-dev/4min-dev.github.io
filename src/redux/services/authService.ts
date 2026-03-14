import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tgInitData } from "../../assets/tgInitData";

const API_URL = import.meta.env.VITE_API_URL

export const authService = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/auth/auth` }),
    endpoints: (builder) => ({
        telegramLogin: builder.query<unknown, void>({
            query: () => ({
                url: '/telegram',
                method: 'GET',
                headers: {
                    'X-Tg-Init-Data': tgInitData
                }
            })
        })
    })
})

export const { useTelegramLoginQuery } = authService