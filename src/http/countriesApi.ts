import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CountriesInfo } from "../config/entities/countriesInfo";

export const countriesApi = createApi({
    reducerPath: 'countriesApi', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }), 
    endpoints: (builder) => ({
      getAllCountries: builder.query<CountriesInfo[], void>({
        query: () => 'all', 
      }),
    }),
  });

  export const { useGetAllCountriesQuery } = countriesApi;