export interface CountriesInfo {
    name: {
        common: string;
        official: string;
    };
    cca3: string;
    region: string;
    population: number;
    flags: {
        png: string;
    };
}