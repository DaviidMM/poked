import { createSlice } from '@reduxjs/toolkit';
import status from './status.js';

const initialState = {
  user: null,
  status: status.loading,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('setUser', { action });
      state.user = action.payload.user;
      state.status = status.authenticated;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.status = status.unauthenticated;
      state.token = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
