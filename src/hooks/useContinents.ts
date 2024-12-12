import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery } from '../http/countriesApi';
import { CountriesInfo } from '../config/entities/countriesInfo';

// funcion que devuelve la lista de continentes
const useContinents = () => {
  // hook para obtener los datos de los paises
  const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  // hook para almacenar la lista de continentes
  const [continents, setContinents] = useState<string[]>([]);
  // hook para almacenar el mensaje de error
  const [fetchError, setFetchError] = useState<string | null>(null);

  // actualiza la lista de continentes
  useEffect(() => {
    if (isLoading) {
      setFetchError(null);
    } else if (error) {
      setFetchError('Error fetching data');
    } else if (countries) {
      // Obtiene la lista de continentes de los datos de los paises y los almacena en el continentsList
      const continentsList = [...new Set(countries.map((country: CountriesInfo) => country.region))];
      // Actualiza la lista de continentes
      setContinents(continentsList);
    }
  }, [countries, error, isLoading]);

  return { continents, fetchError, isLoading };
};

export default useContinents;