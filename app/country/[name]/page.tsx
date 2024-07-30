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
    // if (!name) return (
    //     <p>Not Found</p>
    // );
    if (!data) return (
        <p>Data Not Found</p>
    );

    
    console.log(data);
    const param: SearchParams = { name }
    const country = findCountry(param, data);
    return (
        <>
            {country ? <CountryDetails data={country} /> : <h1>Country Not Found</h1>}
        </>
    );
}

export default Page;
