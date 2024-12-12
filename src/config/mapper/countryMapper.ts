import { CountriesInfo } from "../entities/countriesInfo";
import { DataCountries } from "../responses/dataCountries";


export const countryMapper = (item : DataCountries) : CountriesInfo => {
    return {
        name: {
            common: item.name.common,
            official: item.name.official
        },
        cca3: item.cca3,
        region: item.region,      
        population: item.population,
        flags: {
            png: item.flags.png
        }
    }
}