import { PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
    id: string;
    name: string;
    email: string;
}
export interface AuthState {
    isLoggedIn: boolean;
    user: UserInfo | null;
    token: string | null;
}
export type AuthPayloadAction = PayloadAction<{ 
    user: UserInfo, 
    token: string 
}>;
