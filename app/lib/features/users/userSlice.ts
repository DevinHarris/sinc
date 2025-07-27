import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from '@/lib/types'

export interface UserState {
    user: User | null
}


const initialState: UserState = {
    user:
    {
            expires: '',
            user: {
                id: '3rfdacf',
                image: 'adfjije3rfasf',
                email: 'example@example.com',
                name: 'Devin Chance'
            }
        }
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },

        logoutCurrentUser: (state, action: PayloadAction<User>) => {
            state.user = null;
        }
    }
});

export const { setCurrentUser, logoutCurrentUser } = userSlice.actions
export default userSlice.reducer