import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/userSlice"
import { userApi } from '../services/userApi'
import { clientApi } from '@/services/clientApi';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware, clientApi.middleware]),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;