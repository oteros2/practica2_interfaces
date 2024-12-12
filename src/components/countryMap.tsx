import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CountriesInfo } from '../config/entities/countriesInfo';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';

type CountryMapProps = {
  country: CountriesInfo;
};

const CountryMap = ({ country }: CountryMapProps) => {
  // hook para obtener el tema actual
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{country.name.common}</Text>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <MapView
        style={styles.map}
        initialRegion={{
          // Establece la región inicial en la latitud y longitud del país
          latitude: country.latlng[0],
          longitude: country.latlng[1],
          // Establece el zoom inicial
          latitudeDelta: 12,
          longitudeDelta: 12,
        }}
      >
        <Marker
        // Establece la coordenada del marcador en la latitud y longitud del país
          coordinate={{
            latitude: country.latlng[0],
            longitude: country.latlng[1],
          }}
          title={country.name.common}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  flag: {
    width: 100,
    height: 60,
    marginBottom: 16,
  },
  map: {
   width: '100%',
    height: 500,
  },
});

export default CountryMap;