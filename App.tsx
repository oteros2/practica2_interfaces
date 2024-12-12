import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ContinentScreen from './src/screens/ContinentScreen';
import CountryScreen from './src/screens/CountryScreen';
import CountryDetailsScreen from './src/screens/CountryDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Continent" component={ContinentScreen} />
                <Stack.Screen name="Country" component={CountryScreen} />
                <Stack.Screen name="Country details" component={CountryDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}