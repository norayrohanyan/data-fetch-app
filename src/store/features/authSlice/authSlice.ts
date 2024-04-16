import { Slice, createSlice } from '@reduxjs/toolkit';
import { IAuthState, AuthPayloadAction, IUserInfo } from './Types';
import { getLocalStorageItem, saveLocalStorageItem, clearAuthState } from 'store/utiles/authPersistence';

const initialState: IAuthState = {
    isLoggedIn: false,
    user: getLocalStorageItem<IUserInfo>('user', null),
    token: getLocalStorageItem<string>('token', null),
    error: null
};

const authSlice: Slice<IAuthState> = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: AuthPayloadAction) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            saveLocalStorageItem<string>('email', action.payload.user.email);
            saveLocalStorageItem<string>('token', action.payload.token);
        },
        loginFailure(state, action: AuthPayloadAction) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.error = action.payload.error;
            clearAuthState('user');
            clearAuthState('token');
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.error = null;
            clearAuthState('user');
            clearAuthState('token');
        },
    },
})

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice;