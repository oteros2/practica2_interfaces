import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import CountryList from '../components/countriesList';
import useCountries from '../hooks/useCountries';
import BackButton from '../components/backButton';
import ThemeButton from '../components/themeButton';


type CountryDetailsScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { continent: string } }>; 
};

const CountryDetailsScreen = ({ navigation, route }: CountryDetailsScreenProps) => {
  const { continent } = route.params;
  
  return (
    <View >
      <BackButton />
      <CountryList navigation={navigation} continent={continent} />
    </View>
  );
};

export default CountryDetailsScreen;