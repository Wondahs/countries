'use client';

import CountryDetails from "../../ui/countryDetails";
import { CountryData, SearchParams } from "../../lib/typeDef";
import { useParams } from "next/navigation";
import { findCountry } from "@/app/lib/utils";
import { useFetchData } from "@/app/lib/fetchData";
import { useRouter } from "next/navigation";

const Page = () => {
    const { data, isLoading, error } = useFetchData('/api/countries');
    const { alpha3Code }: { alpha3Code: string } = useParams();
    const router = useRouter();

    // console.log(alpha3Code);
    const param: SearchParams = { alpha3Code };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: Loading</p>;
    if (!data) return <p>No data available</p>;

    let countryData: CountryData[] = [...data];

    const country = findCountry(param, countryData);

    console.log(country);

    if (!country) return <p>Country Not Found</p>;

    return (
        <section 
            className="mt-5 px-8"
        >
            <button
                className="mb-5 bg-[#2B3743] cursor-pointer px-3 py-2 rounded-md font-medium transition-all ease hover:scale-105"
                onClick={() => router.back()}
            >
                Go Back
            </button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: An Error Occurred While fetching data</p>}
            {!data && <p>No data available</p>}
            {!country && <p>Country Not Found</p>}
            {!isLoading && country && <CountryDetails data={country as CountryData} />}
        </section>
    );
}

export default Page;
