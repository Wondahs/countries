import { CountryData } from "@/app/lib/typeDef";
import Flag from "@/app/ui/flag";

const CountryCard = ({ data }: { data: CountryData }) => {
    return (
        <div className="rounded-md my-4 bg-[#2B3743]">
            <Flag source={data.flag} />
            <div className="p-4">
                <h1>{data.name}</h1>
                <p>Population: {data.population}</p>
                <p>Region: {data.region}</p>
                <p>Capital: {data.capital}</p>
            </div>
        </div>
    );
}

export default CountryCard;