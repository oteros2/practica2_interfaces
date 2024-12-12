import { useEffect, useMemo, useState } from 'react';
import { useGetAllCountriesQuery } from '../http/countriesApi';
import { CountriesInfo } from '../config/entities/countriesInfo';

const useCountries = (continent: string) => {
    const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  
    const filteredCountries = useMemo(() => {
      if (countries) {
        return countries.filter((country: CountriesInfo) => country.region === continent);
      }
      return [];
    }, [countries, continent]);
  
    return { countries: filteredCountries, error, isLoading };
  };
  
  export default useCountries;