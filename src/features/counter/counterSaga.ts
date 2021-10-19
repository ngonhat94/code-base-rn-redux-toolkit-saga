import {delay, put, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {incrementFulfilled, incrementPending} from './counterSlice';

function* handleIncrement(action: PayloadAction<number>) {
  yield delay(2000);

  yield put(incrementFulfilled(action.payload));
}

export default function* counterSaga() {
  yield takeLatest(incrementPending.toString(), handleIncrement);
}
