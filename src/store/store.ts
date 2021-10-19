import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: reducers,
  middleware,
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
