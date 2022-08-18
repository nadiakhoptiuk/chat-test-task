import { createReducer } from '@reduxjs/toolkit';
import { setSelectedContact } from './chatActions';

export const openedChatReducer = createReducer(null, {
  [setSelectedContact]: (_, { payload }) => {
    return payload;
  },
});
