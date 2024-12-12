export interface CountriesInfo {
    name: {
        common: string;
    };
    cca3: string;
    region: string;
    capital: string[];
    languages: {[key: string]: string;};
    latlng: number[];
    flags: {
        png: string;
    };
}