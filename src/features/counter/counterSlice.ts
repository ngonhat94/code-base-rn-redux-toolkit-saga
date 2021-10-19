import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementPending: (state, action: PayloadAction<number>) => {
      state.status = 'loading';
    },
    incrementFulfilled: (state, action: PayloadAction<number>) => {
      state.status = 'idle';
      state.value += action.payload;
    },
  },
});
export const {
  increment,
  decrement,
  incrementPending,
  incrementFulfilled,
  incrementByAmount,
} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter;
export default counterSlice.reducer;
