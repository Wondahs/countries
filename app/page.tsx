"use client"

import { useEffect, useState } from "react";
import CountryCard from "./ui/countryCard";
import SearchBar from "./ui/searchBar";
import { CountryData, SearchParams } from "./lib/typeDef";
import Filter from "./ui/filter";
import { useFetchData } from "./lib/fetchData";
import { useRouter } from "next/router";

export default function Home() {
  const { data, isLoading, error } = useFetchData('/api/read-data');
  const [searchData, setSearchData] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const router = useRouter();

  const findCountry = (param: SearchParams, data: CountryData[]): CountryData | CountryData[] | undefined => {
    if (param.name) {
      return data.find((country: CountryData) =>
        country.name.toLowerCase().includes(param.name.toLowerCase())
      );
    }
    if (param.region) {
      return data.filter((country: CountryData) =>
        country.region.toLowerCase().includes(param.region.toLowerCase())
      );
    }
  }

  const searchByName = (obj: CountryData) => {
    const searchParam: SearchParams = {
      name: obj.name,
    }
    const country = findCountry(searchParam, data);
    if (country) {
      router.push({
        pathname: `/country/${obj.name}`,
        query: {
          name: obj.name,
          data: JSON.stringify(country)
        },
      })
    }
  }

  return (
    <main className="flex flex-col">
      <div className="flex flex-col px-8 mt-6">
        <SearchBar setSearchData={setSearchData} />
        <Filter setSearchData={setSearchData} />
      </div>
      <div className="px-8 flex flex-col items-center">
        {data && data.map((country: CountryData, index: any) => (
          <CountryCard key={index} data={country} />
        ))}
      </div>
    </main>
  );
}
