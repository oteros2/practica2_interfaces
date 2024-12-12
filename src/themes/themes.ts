import { Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#6200EE',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#CCCCCC',
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
    border: '#272727',
    notification: '#BB86FC',
  },
};