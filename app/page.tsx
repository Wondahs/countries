"use client";

import { useEffect, useState, useCallback } from "react";
import CountryCard from "./ui/countryCard";
import { CountryData, SearchParams } from "./lib/typeDef";
import { useFetchData } from "./lib/fetchData";
import { findCountry } from "./lib/utils";
import Link from "next/link";
import { dotWave } from "ldrs";
import { useModeStore, usePageData } from "./store";
import clsx from "clsx";


const ITEMS_PER_PAGE = 21;

export default function Home() {
  const { data, isLoading, error } = useFetchData('/api/countries');
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState('');
  const nightMode = useModeStore((state) => state.nightMode);
  const setPageData = usePageData((state) => state.setPagedata);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<CountryData[]>([]);

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
    dotWave.register();
  }, [data, query, filterQuery]);

  setPageData(data);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedData(filteredData?.slice(startIndex, endIndex) || []);
  }, [filteredData, currentPage]);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  }

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new filter
  }

  const nextPage = () => {
    if (currentPage < Math.ceil((filteredData?.length || 0) / ITEMS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  return (
    <main className="flex flex-col">
      <div className="flex flex-col px-8 mt-6 md:flex-row md:w-[100%]">
        <input
          className={clsx("mb-5 w-[100%] md:w-[25%] md:mr-auto py-3 px-0 rounded-md text-center text-sm", {
            'bg-[#2B3743] text-white': nightMode,
            'bg-white text-[#2B3743] shadow-lg border-2': !nightMode
          })}
          type='text'
          value={query}
          onChange={searchHandler}
          placeholder="Search for a country..."
        />

        <select
          id="region"
          value={filterQuery}
          onChange={filterHandler}
          className={clsx("mb-5 w-[100%] md:w-[25%] py-3 px-0 rounded-md bg-[#2B3743] text-center text-sm", {
            'bg-[#2B3743] text-white': nightMode,
            'bg-white text-[#2B3743] shadow-lg border-2': !nightMode,
          })}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {isLoading && <div className="m-auto"><l-dot-wave size={100} speed={3} color={nightMode ? 'white' : '#212E37'} ></l-dot-wave></div>}
      {error && <p>Error: Loading</p>}
      <p className="font-light text-center">Click a country card to see more details about the country</p>
      <div className="px-8 mb-5 flex flex-col flex-wrap items-center md:flex-row md:justify-around">
        {paginatedData.length > 0 ? paginatedData.map((country: CountryData, index: any) => (
          <Link href={'/country/' + country.alpha3Code} key={index} >
            <CountryCard data={country} />
          </Link>
        )) : <p className="text-center m-auto">{!isLoading && "No Country Found"}</p>}
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={clsx("px-4 py-2 rounded", {
            'bg-[#2B3743] text-white': nightMode,
            'bg-white text-[#2B3743] shadow-lg': !nightMode,
            'opacity-50 cursor-not-allowed': currentPage === 1
          })}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil((filteredData?.length || 0) / ITEMS_PER_PAGE)}
          className={clsx("px-4 py-2 rounded", {
            'bg-[#2B3743] text-white': nightMode,
            'bg-white text-[#2B3743] shadow-lg': !nightMode,
            'opacity-50 cursor-not-allowed': currentPage === Math.ceil((filteredData?.length || 0) / ITEMS_PER_PAGE)
          })}
        >
          Next
        </button>
      </div>
    </main>
  );
}
