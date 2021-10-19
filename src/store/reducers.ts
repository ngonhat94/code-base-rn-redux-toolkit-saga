import {combineReducers} from '@reduxjs/toolkit';

import counterSlice from '../features/counter/counterSlice';

export const reducers = combineReducers({
  counter: counterSlice,
});
