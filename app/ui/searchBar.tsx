import { useState } from "react";
import { CountryData } from "../lib/typeDef";

const SearchBar = ({ setSearchData }: { setSearchData: Function }) => {
    const [query, setQuery] = useState('');
    return (
        <input
            className="mb-5 w-[100%] py-3 px-0 rounded-md bg-[#2B3743] text-center text-sm"
            type='text'
            defaultValue={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a country..."
        />
    );
}

export default SearchBar;