import { CountryData, SearchParams } from "./typeDef";

export const findCountry = (param: SearchParams, data: CountryData[]) => {
    if (param.alpha3Code) {
        return data.find((country: CountryData) =>
            country.alpha3Code.toLowerCase().includes((param.alpha3Code as string).toLowerCase())
        );
    }
    if (param.name) {
        return data.filter((country: CountryData) =>
            country.name.toLowerCase().startsWith((param.name as string).toLowerCase())
        );
    }
    if (param.region) {
        return data.filter((country: CountryData) =>
            country.region.toLowerCase().includes((param.region as string).toLowerCase())
        );
    }
}
