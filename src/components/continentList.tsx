import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import useContinents from '../hooks/useContinents';
import { NavigationProp, ParamListBase, useTheme } from '@react-navigation/native';

type ContinentsListProps = {
  navigation: NavigationProp<ParamListBase>;
};
const ContinentsList = ( {navigation} : ContinentsListProps ) => {
  const { continents, isLoading, fetchError } = useContinents();
  const { colors, dark } = useTheme();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
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
      data={continents}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
        style={[
          styles.item,
          { backgroundColor: colors.background, borderColor: dark ? '#FFFFFF' : colors.border },
        ]}
        onPress={() => navigation.navigate('CountryDetails', { continent: item })}
      >
        <Text style={[styles.text, { color: colors.text }]}>{item}</Text>
      </TouchableOpacity>
      )}
      contentContainerStyle={[styles.list, { backgroundColor: colors.background }]}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
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
    borderWidth: 0.5,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default ContinentsList;