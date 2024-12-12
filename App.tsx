import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContinentScreen from './src/screens/ContinentScreen';
import CountryScreen from './src/screens/CountryScreen';
import CountryDetailsScreen from './src/screens/CountryDetailsScreen';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/store/store';
import { darkTheme, lightTheme } from './src/themes/themes';
import ThemeButton from './src/components/themeButton';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    return (
      <ThemeProvider value={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Continents" 
            component={ContinentScreen} 
            options={{title:'Continents page', headerRight: () => <ThemeButton/>}}/>
            <Stack.Screen 
            name="CountryDetails" 
            component={CountryDetailsScreen} 
            options={{title:'Countries details page', headerRight: () => <ThemeButton/>}}
            />
            <Stack.Screen 
            name="Country" 
            component={CountryScreen} 
            options={{title:'Country map page', headerRight: () => <ThemeButton/>}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  };
  
  export default function App() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }