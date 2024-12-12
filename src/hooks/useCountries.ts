import { useMemo } from 'react';
import { useGetAllCountriesQuery } from '../http/countriesApi';
import { CountriesInfo } from '../config/entities/countriesInfo';

// función que recibe un continente y devuelve los paises de ese continente
const useCountries = (continent: string) => {
  // hook para obtener los datos de los paises
  const { data: countries, error, isLoading } = useGetAllCountriesQuery();

  // Filtra los paises por continente y los almacena en filteredCountries usando useMemo para evitar renderizados innecesarios
  const filteredCountries = useMemo(() => {
    if (countries) {
      return countries.filter((country: CountriesInfo) => country.region === continent);
    }
    return [];
  }, [countries, continent]);

  const fetchError = error ? 'Error fetching data' : null;

  return { countries: filteredCountries, fetchError, isLoading };
};

export default useCountries;