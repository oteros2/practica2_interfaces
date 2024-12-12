import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationProp, ParamListBase } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go Continent page"
        onPress={() => navigation.navigate('Continent')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})