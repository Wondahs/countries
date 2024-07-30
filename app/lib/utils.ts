import { CountryData, SearchParams } from "./typeDef";

export const findCountry = (param: SearchParams, data: CountryData[]): CountryData | CountryData[] | undefined => {
    if (param.name) {
        return data.find((country: CountryData) =>
            country.name.toLowerCase().includes(param.name.toLowerCase())
        );
    }
    if (param.region) {
        return data.filter((country: CountryData) =>
            country.region.toLowerCase().includes(param.region.toLowerCase())
        );
    }
}
