import { Slice, createSlice } from "@reduxjs/toolkit";
import { IRegistrationState, RegistrationStateAction } from "./Types";

const initialState: IRegistrationState = {
    isRegistering: false,
    error: null,
}

const RegistrationSlice: Slice<IRegistrationState> = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registerSuccess(state) {
            state.isRegistering = false;
            state.error = null;
        },
        registerFailure(state, action: RegistrationStateAction) {
            state.isRegistering = false;
            state.error = action.payload.error;
        }
    }
}) 

export const { registerSuccess, registerFailure } = RegistrationSlice.actions;
export default RegistrationSlice;
