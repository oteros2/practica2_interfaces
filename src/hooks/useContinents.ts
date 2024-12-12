import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery } from '../http/countriesApi';
import { CountriesInfo } from '../config/entities/countriesInfo';

const useContinents = () => {
  const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  const [continents, setContinents] = useState<string[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoading) {
      setFetchError(null);
    } else if (error) {
      setFetchError('Error fetching data');
    } else if (countries) {
      const continentsList = [...new Set(countries.map((country: CountriesInfo) => country.region))];
      setContinents(continentsList);
    }
  }, [countries, error, isLoading]);

  return { continents, fetchError, isLoading };
};

export default useContinents;