import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';
import { RootState } from '../store/store';

const ThemeButton = () => {
  // hook para obtener el dispatch
  const dispatch = useDispatch();
  // hook para obtener el estado del tema
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(toggleTheme())}
    >
      <Text style={styles.buttonText}>{isDarkMode ? '☀️' : '🌙'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6c463e',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default ThemeButton;