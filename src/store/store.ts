import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../http/countriesApi';
import themeReducer from '../slices/themeSlice';

// Configura el store de Redux
export const store = configureStore({
  // Agrega el reducer del tema y el reducer de la API de paises
  reducer: {
    theme : themeReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  // Agrega el middleware que ofrece por defecto Redux Toolkit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // Agrega el middleware de la API de paises
    }).concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;