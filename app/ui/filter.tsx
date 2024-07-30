const Filter = ({setSearchData}: {setSearchData: Function}) => {
    return ( 
        <select
            className="mb-5 w-[100%] py-3 px-0 rounded-md bg-[#2B3743] text-center text-sm"
        >
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