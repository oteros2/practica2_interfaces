import { CountriesInfo } from "../entities/countriesInfo";
import { DataCountriesResponse } from "../responses/dataCountriesResponse";


export const countryMapper = (item : DataCountriesResponse) : CountriesInfo => {
    return {
        name: {
            common: item.name.common,
            official: item.name.official
        },
        cca3: item.cca3,
        region: item.region, 
        capital: item.capital ?? [],     
        languages: item.languages ?? {},
        population: item.population,
        latlng: item.latlng,
        flags: {
            png: item.flags.png
        }
    }
}