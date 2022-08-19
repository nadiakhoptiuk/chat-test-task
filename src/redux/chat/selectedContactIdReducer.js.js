import { createReducer } from '@reduxjs/toolkit';
import { setSelectedContactId } from './chatActions';

export const selectedContactIdReducer = createReducer(null, {
  [setSelectedContactId]: (_, { payload }) => {
    return payload;
  },
});
