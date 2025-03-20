import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    authStart: (state) => {
      state.isFetching = true;
    },
    authSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    authFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  }
});

export const { authStart, authFailed, authSuccess } = authSlice.actions;

export default authSlice.reducer;
