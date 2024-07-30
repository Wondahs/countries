const Filter = ({setSearchData}: {setSearchData: Function}) => {
    return ( 
        <select>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
     );
}
 
export default Filter;