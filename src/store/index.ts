import { configureStore } from "@reduxjs/toolkit";
import { referralService } from "../redux/services/referralService";
import { authService } from "../redux/services/authService";

export const store = configureStore({
    reducer: {
        [referralService.reducerPath]: referralService.reducer,
        [authService.reducerPath]: authService.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        referralService.middleware,
        authService.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch