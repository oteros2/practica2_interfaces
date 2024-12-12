import { View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ContinentList from '../components/continentList';

type ContinentScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const ContinentScreen = ({ navigation }: ContinentScreenProps) => {
  return (
    <View>
      <ContinentList navigation={navigation} />
    </View>
  )
}

export default ContinentScreen