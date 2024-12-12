import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContinentScreen from './src/screens/ContinentScreen';
import CountryScreen from './src/screens/CountryScreen';
import CountryDetailsScreen from './src/screens/CountryDetailsScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Continent" component={ContinentScreen} />
                <Stack.Screen name="Country" component={CountryScreen} />
                <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
            </Stack.Navigator>a
        </NavigationContainer>
        </Provider>
    );
}