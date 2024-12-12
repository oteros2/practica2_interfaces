import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type CountryDetailsScreenProps = {
  navigation: NavigationProp<ParamListBase>;
}
const CountryDetailsScreen = ( {navigation} : CountryDetailsScreenProps ) => {
  return (
    <View>
      <Text>CountryDetailsScreen</Text>
      <Button
        title="Go Continent page"
        onPress={() => navigation.navigate('Continent')}
      />
    </View>
  )
}

export default CountryDetailsScreen

const styles = StyleSheet.create({})