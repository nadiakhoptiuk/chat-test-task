import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'configuration.js/fbConfig';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return { email: user.email, token: user.accessToken };
    } catch (error) {
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return { email: user.email, token: user.accessToken };
    } catch (error) {
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logInWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, thunkApi) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      return { email: user.email, token: token };
    } catch (error) {
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        //
      });
  }
);
