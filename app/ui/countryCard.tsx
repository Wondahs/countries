import { CountryData } from "@/app/lib/typeDef";
import Flag from "@/app/ui/flag";

const CountryCard = ({ data }: { data: CountryData }) => {
    return (
        <div className="flex flex-col mb-2 h-auto hover:scale-105 transition-all ease cursor-pointer rounded-lg shadow-xl my-4 bg-[#2B3743]">
            <Flag source={data.flag} width={350} height={450} />
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
                <div className="text-sm">
                <p><span className="font-bold">Population:</span> {data.population}</p>
                <p><span className="font-bold">Region:</span> {data.region}</p>
                <p><span className="font-bold">Capital:</span> {data.capital}</p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;