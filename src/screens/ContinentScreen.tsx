import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type ContinentScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const ContinentScreen = ({ navigation } : ContinentScreenProps) => {
  return (
    <View>
      <Text>ContinentScreen</Text>
      <Button
        title="Go Country page"
        onPress={() => navigation.navigate('Country')}
      />
    </View>
  )
}

export default ContinentScreen

const styles = StyleSheet.create({})