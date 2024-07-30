'use client';

import CountryDetails from "../../ui/countryDetails";
import { CountryData, SearchParams } from "../../lib/typeDef";
import { useRouter } from "next/navigation";
import { count } from "console";
import { useParams } from "next/navigation";
import { findCountry } from "@/app/lib/utils";
import { useFetchData } from "@/app/lib/fetchData";

const Page = () => {
    const { data, isLoading, error } = useFetchData('/api/countries');
    const { name }: {name: string} = useParams();
    let country;
    const param: SearchParams = { name }

    if (!data) {
        return (
        <p>Data Not Found</p>
    );} else {
        country = findCountry(param, data);
        if (!country) {
            return (
                <p>Country Data Not Found</p>
            );
        }
    }


    console.log(data);
    return (
        <>
            {!isLoading && country ? <CountryDetails data={country} /> : <h1>Country Not Found</h1>}
        </>
    );
}

export default Page;
