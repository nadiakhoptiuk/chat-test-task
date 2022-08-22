import { createSlice } from '@reduxjs/toolkit';
import { resetError } from './authActions';
import { register, logIn, logOut, logInWithGoogle } from './authOperations';

const initialState = {
  user: {
    email: '',
    token: null,
  },
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.error = null;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, _) => {
      state.error = 'Something went wrong. Try again.';
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, _) => {
      state.error = 'Wrong email or password. Try again or register.';
    },
    [logInWithGoogle.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload;
      state.isLoggedIn = true;
    },
    [logInWithGoogle.rejected]: (state, _) => {
      state.error = 'Wrong email or password. Try again or register.';
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
    [resetError]: (state, _) => {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
