import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../http/countriesApi';
import themeReducer from '../slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme : themeReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;