import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            currentUser: userReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']