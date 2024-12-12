export interface CountriesInfo {
    name: {
        common: string;
        official: string;
    };
    cca3: string;
    region: string;
    subregion: string;
    population: number;
    flags: {
        png: string;
        svg: string;
    };
}