import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice/authSlice';
import RegistrationSlice from './features/registrationSlice/RegistrationSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    register: RegistrationSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
