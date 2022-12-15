import { configureStore } from '@reduxjs/toolkit';

import { reactotron } from '../config/reactotron';
import { CartReducer } from './reducers/cart';
import { UserReducer } from './reducers/user';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    user: UserReducer,
  },
  enhancers: __DEV__ ? [reactotron.createEnhancer!()] : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
