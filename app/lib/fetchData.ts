import { useEffect, useState } from "react";
import fs from 'fs/promises';
// import {GetStaticProps} from 'next';

export const useFetchData = async (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(url: string) {
            try {
                let parsedResponse = null;
                const response = await fetch(url);
                if (!response.ok) {
                    setError(true);
                    setData(null);
                    setIsLoading(false);
                    throw new Error("Could Not Fetch Data");
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
