import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import useCountries from '../hooks/useCountries';

type CountryListProps = {
  continent: string;
  navigation: NavigationProp<ParamListBase>;
};

const CountryList = ({ continent, navigation }: CountryListProps) => {
  const { countries, isLoading } = useCountries(continent);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={countries}
      keyExtractor={(item) => item.cca3}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CountryDetails', { country: item })}
        >
          <Text style={styles.name}>{item.name.common}</Text>
          <Text style={styles.detail}>Capital: {item.capital?.[0]}</Text>
          <Text style={styles.detail}>Population: {item.population}</Text>
          <Text style={styles.detail}>Region: {item.region}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    fontSize: 16,
    color: '#666',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default CountryList;