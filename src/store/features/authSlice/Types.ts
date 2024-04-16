import { PayloadAction } from '@reduxjs/toolkit';

export interface IUserInfo {
    id: string;
    email: string;
    password: string;
}
export interface IAuthState {
    isLoggedIn: boolean;
    user: IUserInfo | null;
    token: string | null;
    error: string | null
}
export type AuthPayloadAction = PayloadAction<{ 
    user: IUserInfo, 
    token: string, 
    error: string,
}>;
