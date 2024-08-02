"use client";

import { useEffect, useState, useCallback } from "react";
import CountryCard from "./ui/countryCard";
import SearchBar from "./ui/searchBar";
import { CountryData, SearchParams } from "./lib/typeDef";
import Filter from "./ui/filter";
import { useFetchData } from "./lib/fetchData";
import { useRouter } from "next/navigation";
import { findCountry } from "./lib/utils";
import Link from "next/link";
import _ from 'lodash';
import { dotWave } from "ldrs";

dotWave.register();

export default function Home() {
  const { data, isLoading, error } = useFetchData('/api/countries');
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (query) {
      const obj: SearchParams = { name: query }
      const country = findCountry(obj, data);
      if (country) setFilteredData(country);
    } else if (filterQuery) {
      const obj: SearchParams = { region: filterQuery }
      const country = findCountry(obj, data);
      if (country) setFilteredData(country);
    } else {
      setFilteredData(data)
    }
  }, [data, query, filterQuery]);


  const searchHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    handleSearch(event.target.value);
  }

  const handleSearch = useCallback(_.debounce((value) => {
    setQuery(value);
  }, 1000), []);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    filterSearch(event.target.value);
  }

  const filterSearch = useCallback(_.debounce((value) => {
    setFilterQuery(value);
  }, 1000), []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col px-8 mt-6">
        <input
          className="mb-5 w-[100%] py-3 px-0 rounded-md bg-[#2B3743] text-center text-sm"
          type='text'
          value={query}
          onChange={searchHandler}
          placeholder="Search for a country..."
        />

        <select
          value={filterQuery}
          onChange={filterHandler}
          className="mb-5 w-[100%] py-3 px-0 rounded-md bg-[#2B3743] text-center text-sm"
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {isLoading && <div className="m-auto"><l-dot-wave size={100} speed={3} color={'white'} ></l-dot-wave></div>}
      {error && <p>Error: Loading</p>}
      <div className="px-8 mb-5 flex flex-col flex-wrap items-center md:flex-row md:justify-between">
        {filteredData ? filteredData.map((country: CountryData, index: any) => (
          <Link href={'/country/' + country.alpha3Code} key={index} >
            <CountryCard data={country} />
          </Link>
        )) : <p>No Country Found</p>}
      </div>
    </main>
  );
}
