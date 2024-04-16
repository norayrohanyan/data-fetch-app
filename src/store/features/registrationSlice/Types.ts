import { PayloadAction } from '@reduxjs/toolkit';

export interface IRegistrationState {
    isRegistering: boolean;
    error: string | null;
}

export type RegistrationStateAction = PayloadAction<IRegistrationState>;