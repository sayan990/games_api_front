import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { gamesApi } from './services/gamesApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const makeStore = () =>
  configureStore({
    reducer: {
        "gamesAPI" : gamesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([gamesApi.middleware]) ,
    devTools: true,
  });

setupListeners(makeStore().dispatch)

export const wrapper = createWrapper(makeStore);
export const RootState = makeStore().getState
export const AppDispatch = makeStore().dispatch