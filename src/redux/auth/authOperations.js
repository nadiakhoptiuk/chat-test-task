import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseConfig } from 'configuration.js/fbConfig';
import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
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
      // navigateUser();
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

signInWithPopup(auth, provider)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

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

// onAuthStateChanged(auth, user => {
//   if (user) {
//     const uid = user.uid;
//   } else {
//     // User is signed out
//   }
// });
