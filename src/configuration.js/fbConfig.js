import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBPun4SFdsme-mOYm3R8ONrC15fjNdEsos',
  authDomain: 'messenger-bc755.firebaseapp.com',
  databaseURL:
    'https://messenger-bc755-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'messenger-bc755',
  storageBucket: 'messenger-bc755.appspot.com',
  messagingSenderId: '287581443655',
  appId: '1:287581443655:web:11ddde1bd2dfa8bc4f8362',
  measurementId: 'G-GKLQFKP739',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
  app,
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
};
