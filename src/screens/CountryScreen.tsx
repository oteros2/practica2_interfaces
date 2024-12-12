import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import BackButton from '../components/backButton';

type CountryScreenProps = {
  navigation: NavigationProp<ParamListBase>;  
}

const CountryScreen = ( {navigation} : CountryScreenProps) => {
  return (
    <View>
      <BackButton />
      <Text>CountryScreen</Text>
    </View>
  )
}

export default CountryScreen

const styles = StyleSheet.create({})