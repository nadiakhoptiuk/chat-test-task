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
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterContactsReducer } from './filter/filterContactsReducer';
import { contactsApi } from './contacts';
import authReducer from './auth/authSlice';
// import { openedChatReducer } from './chat/openedChatReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const chatPersistConfig = {
//   key: 'chat',
//   storage,
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterContactsReducer,
    // openedChat: openedChatReducer,
  },
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
export const persistor = persistStore(store);
