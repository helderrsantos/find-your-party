import { configureStore } from '@reduxjs/toolkit';

import { CartReducer } from './reducers/cart';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  enhancers: undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
