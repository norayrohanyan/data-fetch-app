import { Slice, createSlice } from '@reduxjs/toolkit';
import { AuthState, AuthPayloadAction } from './Types';

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    token: null,
};

const authSlice: Slice<AuthState> = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: AuthPayloadAction) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice;