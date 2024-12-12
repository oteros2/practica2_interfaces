import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import CountryList from '../components/countriesList';
import useCountries from '../hooks/useCountries';


type CountryDetailsScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { continent: string } }>; 
};

const CountryDetailsScreen = ({ navigation, route }: CountryDetailsScreenProps) => {
  const { continent } = route.params;
  
  return (
    <View >
      <CountryList navigation={navigation} continent={continent} />
      <Button
        title="Go to Continent Page"
        onPress={() => navigation.navigate('Continent')} 
      />
    </View>
  );
};

export default CountryDetailsScreen;