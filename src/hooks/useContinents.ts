import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery } from '../http/countriesApi';
import { CountriesInfo } from '../config/entities/countriesInfo';

const useContinents = () => {
  const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  const [continents, setContinents] = useState<string[] | null>(null);

  useEffect(() => {
    if (countries) {
      const continentsList = [...new Set(countries.map((country: CountriesInfo) => country.region))];
      setContinents(continentsList);
    }
  }, [countries]);

  return { continents, error, isLoading };
};

export default useContinents;