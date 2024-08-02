import { CountryData } from "@/app/lib/typeDef";
import Flag from "./flag";
import { useModeStore } from "../store";
import clsx from "clsx";

const CountryDetails = ({ data }: { data: CountryData }) => {
    const nightMode = useModeStore((state) => state.nightMode);
    return (
        <section className="flex flex-col my-5 md:flex-row md:justify-around">
            <div className="w-[40%]">
                <Flag width={350} height={450} source={data.flag} />
            </div>
            <div>
                <h1 className="my-9 font-bold text-xl md:text-3xl">{data.name}</h1>
                <div className="md:flex flex-row gap-x-20">
                    <div className="mb-5">
                        <p><span className="font-bold">Native Name:</span> {data.nativeName}</p>
                        <p><span className="font-bold">Population:</span> {data.population}</p>
                        <p><span className="font-bold">Region:</span> {data.region}</p>
                        <p><span className="font-bold">Sub Region:</span> {data.subregion}</p>
                        <p><span className="font-bold">Capital:</span> {data.capital}</p>
                    </div>
                    <div className="mb-5">
                        <p><span className="font-bold">Top Level Domain:</span> {data.topLevelDomain}</p>
                        <p><span className="font-bold">Currencies:</span> {data.currencies && data.currencies.map((obj, index) => (
                            <span key={index}>{obj.code} | Symbol: {obj.symbol}</span>
                        ))}</p>
                        <p><span className="font-bold">Languages:</span> {data.languages && data.languages.map((obj, index) => (
                            <span className="mr-2" key={obj.iso639_1}>{obj.name} {index + 1 < data.languages.length && '|'}</span>
                        ))}</p>
                    </div>
                </div>
                <div className="mb-5 md:mt-8">
                    <p>
                        <span className="font-bold">Border Countries:</span>
                        <span className="flex flex-wrap">{data.borders && data.borders.map((item, index) => (
                            <span className={clsx("py-3 mx-2 my-1 px-6 rounded", {
                                'bg-[#2B3743] text-white': nightMode,
                                'bg-[#d3d0d0] text-[#2B3743]': !nightMode
                            })} key={index}>{item}</span>
                        ))}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CountryDetails;
