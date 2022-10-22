import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../auth/context/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
