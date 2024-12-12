import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import useCountries from '../hooks/useCountries';

type CountryListProps = {
  continent: string;
  navigation: NavigationProp<ParamListBase>;
};

const CountryList = ({ continent, navigation }: CountryListProps) => {
  const { countries, isLoading, fetchError} = useCountries(continent);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  if (fetchError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{fetchError}</Text>
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
          onPress={() => navigation.navigate('Country', { country: item })}
        >
          <View style={styles.itemContent}>
            <Image source={{ uri: item.flags.png }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name.common}</Text>
              <Text style={styles.detail}>Capital: {item.capital?.[0] || 'N/A'}</Text>
              <Text style={styles.detail}>Languages: {item.languages ? Object.values(item.languages).join(', ') : 'N/A'}</Text>
            </View>
          </View>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 16,
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
  image: {
    width: 50,
    height: 30,
    borderRadius: 4,
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default CountryList;