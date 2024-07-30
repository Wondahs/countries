import { useEffect, useState } from "react";
import { CountryData } from "./typeDef";
// import {GetStaticProps} from 'next';

export const useFetchData = (url: string) => {
    const [data, setData] = useState<CountryData[] | any>(null);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData(url: string) {
            setIsLoading(true);
            try {
                let parsedResponse = null;
                const response = await fetch(url);
                if (!response.ok) {
                    setError(true);
                    setData(null);
                    setIsLoading(false);
                    return;
                }
                parsedResponse = await response.json()
                if (parsedResponse) {
                    setError(false);
                    setData(parsedResponse);
                    setIsLoading(false);
                } else {
                    setError(true);
                    setData(null);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log((error as any).message);
            }
        }

        fetchData(url);
    }, [url]);

    return { data, error, isLoading };
}
