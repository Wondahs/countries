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
    <main>
      <div>
        <SearchBar setSearchData={setSearchData} />
        <Filter setSearchData={setSearchData} />
      </div>
      <ul>
        {data && data.map((country: CountryData, index: any) => (
          <CountryCard key={index} data={country} />
        ))}
      </ul>
    </main>
  );
}
