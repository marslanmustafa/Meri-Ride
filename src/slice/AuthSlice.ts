// features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  userId: any;
}

const initialState: AuthState = {
  token: Cookies.get('token') || null,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; userId: any }>) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      Cookies.set('token', action.payload.token);
    },
    logOut: (state) => {
      state.token = null;
      state.userId = null;
      Cookies.remove('token');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
