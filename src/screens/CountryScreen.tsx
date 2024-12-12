import React from 'react';
import { View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { CountriesInfo } from '../config/entities/countriesInfo';
import CountryMap from '../components/countryMap';
import BackButton from '../components/backButton';
import ThemeButton from '../components/themeButton';

const CountryScreen = () => {
  const route = useRoute<RouteProp<{ params: { country: CountriesInfo } }, 'params'>>();
  const { country } = route.params;

  return (
    <View>
      <BackButton />
      <CountryMap country={country} />
    </View>
  );
};

export default CountryScreen;