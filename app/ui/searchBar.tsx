import { useState } from "react";
import { CountryData } from "../lib/typeDef";

const SearchBar = ({setSearchData}: {setSearchData: Function}) => {
    const [query, setQuery] = useState('');
    return (
        <input
            type='text'
            value={query}
            placeholder="Search for a country..."
        />
    );
}

export default SearchBar;