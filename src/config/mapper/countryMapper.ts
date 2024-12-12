import { CountriesInfo } from "../entities/countriesInfo";
import { DataCountriesResponse } from "../responses/dataCountriesResponse";

// Función que mapea los datos de la respuesta de la API a la interfaz personalizada de los datos de los países
export const countryMapper = (item : DataCountriesResponse) : CountriesInfo => {
    return {
        name: {
            common: item.name.common,
        },
        cca3: item.cca3,
        region: item.region, 
        capital: item.capital ?? [],     
        languages: item.languages ?? {},
        latlng: item.latlng,
        flags: {
            png: item.flags.png
        }
    }
}