import { CountryData } from "@/app/lib/typeDef";
import Flag from "@/app/ui/flag";

const CountryCard = ({data}: {data: CountryData}) => {
    return ( 
        <div>
            <Flag source={data.flag}/>
            <h1>{data.name}</h1>
            <p>Population: {data.population}</p>
            <p>Region: {data.region}</p>
            <p>Capital: {data.capital}</p>
        </div>
     );
}
 
export default CountryCard;