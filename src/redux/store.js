import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { gamesApi } from './services/gamesApi';
import registerUserSliceReducer from './features/RegisterSlice'; 
import loginUserSliceReducer from "./features/LogInSlice"
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const makeStore = () =>
  configureStore({
    reducer: {
        "gamesAPI" : gamesApi.reducer,
        registerUserSliceReducer,
        loginUserSliceReducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([gamesApi.middleware]) ,
    devTools: true,
  });

setupListeners(makeStore().dispatch)

export const wrapper = createWrapper(makeStore);
export const RootState = makeStore().getState
export const AppDispatch = makeStore().dispatch