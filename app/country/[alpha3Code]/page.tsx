'use client';

import CountryDetails from "../../ui/countryDetails";
import { CountryData, SearchParams } from "../../lib/typeDef";
import { useParams } from "next/navigation";
import { findCountry } from "@/app/lib/utils";
import { useFetchData } from "@/app/lib/fetchData";
import { useRouter } from "next/navigation";
import { useModeStore, usePageData } from "@/app/store";
import clsx from "clsx";
import { dotWave } from "ldrs";

dotWave.register();

const Page = () => {
    const data = usePageData((state) => state.data);
    const { alpha3Code }: { alpha3Code: string } = useParams();
    const router = useRouter();
    const nightMode = useModeStore((state) => state.nightMode);

    // console.log(alpha3Code);
    const param: SearchParams = { alpha3Code };

    if (!data) return <p>No data available</p>;

    let countryData: CountryData[] = [...data];

    const country = findCountry(param, countryData);

    return (
        <section 
            className="mt-5 px-8"
        >
            <button
                className={clsx("mb-5 cursor-pointer px-3 py-2 rounded-md font-medium transition-all ease hover:scale-105", {
                    'bg-[rgb(43,55,67)] text-white': nightMode,
                    'bg-[#d3d0d0] text-[#2B3743]':!nightMode
                })}
                onClick={() => router.back()}
            >
                Go Back
            </button>
            {!data && <p>No data available</p>}
            {!country && <p>Country Not Found</p>}
            {country && <CountryDetails data={country as CountryData} />}
        </section>
    );
}

export default Page;
