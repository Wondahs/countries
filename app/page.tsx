"use client";

import { useEffect, useState } from "react";
import CountryCard from "./ui/countryCard";
import SearchBar from "./ui/searchBar";
import { CountryData, SearchParams } from "./lib/typeDef";
import Filter from "./ui/filter";
import { useFetchData } from "./lib/fetchData";
import { useRouter } from "next/navigation";
import { findCountry } from "./lib/utils";

export default function Home() {
  const { data, isLoading, error } = useFetchData('/api/countries');
  const [searchData, setSearchData] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const router = useRouter();

  const searchByName = (obj: CountryData) => {
    const searchParam: SearchParams = {
      alpha3Code: obj.alpha3Code,
    }
    const country = findCountry(searchParam, data);
    if (country) {
      router.push('/country/' + obj.alpha3Code)
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
          <div key={index} onClick={() => searchByName(country)}>
            <CountryCard data={country} />
          </div>
        ))}
      </div>
    </main>
  );
}
