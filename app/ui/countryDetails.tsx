import { CountryData } from "@/app/lib/typeDef";

const Details = ({data}: {data: CountryData}) => {
    return ( 
        <section>
            <h1>{data.name}</h1>
            <p>Native Name: {data.nativeName}</p>
            <p>Population: {data.population}</p>
            <p>Region: {data.region}</p>
            <p>Sub Region: {data.subregion}</p>
            <p>Capital: {data.capital}</p>
            <p>Top Level Domain: {data.topLevelDomain}</p>
            <p>Currencies: {data.currencies.join(',')}</p>
            <p>Languages: {data.languages.join(',')}</p>
            <p>Border Countries: {data.borders.join(',')}</p>
        </section>
     );
}
 
export default Details;