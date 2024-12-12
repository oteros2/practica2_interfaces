export interface CountriesInfo {
    name: {
        common: string;
        official: string;
    };
    cca3: string;
    region: string;
    capital: string[];
    languages: {[key: string]: string;};
    population: number;
    latlng: number[];
    flags: {
        png: string;
    };
}