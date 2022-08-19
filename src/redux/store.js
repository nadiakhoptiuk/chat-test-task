import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterContactsReducer } from './filter/filterContactsReducer';
import { contactsApi } from './contacts';
import authReducer from './auth/authSlice';
import { selectedContactIdReducer } from './chat/selectedContactIdReducer.js';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'openedChat'],
};

const rootReducer = combineReducers({
  selectedContactId: selectedContactIdReducer,
  filter: filterContactsReducer,
  auth: authReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: contactsApi,
      },
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export const persistore = persistStore(store);
