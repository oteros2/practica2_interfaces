import { Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#6200EE',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#000000',
    notification: '#6200EE',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#BB86FC',
    background: '#121212',
    card: '#1F1B24',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: '#BB86FC',
  },
};