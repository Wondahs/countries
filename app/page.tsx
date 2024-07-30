"use client"

import { useState } from "react";
import CountryCard from "./ui/countryCard";
import SearchBar from "./ui/searchBar";
import { CountryData } from "./lib/typeDef";
import Filter from "./ui/filter";
import { useFetchData } from "./lib/fetchData";

export default function Home() {
  const {data, isLoading, error} = useFetchData('/api/read-data');
  const [searchData, setSearchData] = useState({});

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
