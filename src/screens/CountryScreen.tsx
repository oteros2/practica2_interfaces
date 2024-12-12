import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type CountryScreenProps = {
  navigation: NavigationProp<ParamListBase>;  
}

const CountryScreen = ( {navigation} : CountryScreenProps) => {
  return (
    <View>
      <Text>CountryScreen</Text>
      <Button
        title="Go Country details page"
        onPress={() => navigation.navigate('Country details')}
      />
    </View>
  )
}

export default CountryScreen

const styles = StyleSheet.create({})