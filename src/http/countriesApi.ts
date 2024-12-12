import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CountriesInfo } from "../config/entities/countriesInfo";
import { DataCountriesResponse } from "../config/responses/dataCountriesResponse";
import { countryMapper } from "../config/mapper/countryMapper";

// API para obtener información de los continentes y los países
export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    // endpoint para obtener toda la informacion de los países
    getAllCountries: builder.query<CountriesInfo[], void>({
      query: () => 'all',
      transformResponse: (response: DataCountriesResponse[]) => response.map(countryMapper),
    }),
    
    // endpoint para obtener los países por continente
    getCountriesByContinent: builder.query<CountriesInfo[], string>({
      query: (continent) => `region/${continent}`,
      transformResponse: (response: DataCountriesResponse[]): CountriesInfo[] => {
        return response.map(countryMapper);
      },
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountriesByContinentQuery } = countriesApi;