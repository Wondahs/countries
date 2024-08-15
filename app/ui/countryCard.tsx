import { CountryData } from "@/app/lib/typeDef";
import Flag from "@/app/ui/flag";
import { useModeStore } from "../store";
import clsx from "clsx";

const CountryCard = ({ data }: { data: CountryData }) => {
    const nightMode = useModeStore((state) => state.nightMode);
    return (
        <div className={clsx("flex flex-col mb-2 mx-5 h-auto hover:scale-105 transition-all ease cursor-pointer rounded-lg shadow my-4", {
            'bg-[#2B3743] text-white' : nightMode,
            'bg-white text-[#2B3743]' :!nightMode,
        })}>
            <Flag source={data.flag} width={250} height={300} />
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
