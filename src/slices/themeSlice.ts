import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del slice
const initialState = {
  isDarkMode: false,
};

// Slice para manejar el estado del tema
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // Reducer para cambiar el tema
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;