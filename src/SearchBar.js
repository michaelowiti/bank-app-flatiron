import React from 'react';


const SearchBar=({searchParameter,onTransSearch})=>{
    function handleTransSearch(e){
        onTransSearch(e.target.value)
    }
    return(
        <>
        <input type="text"
         name="searchbar"
         value={searchParameter}
         placeholder="search transaction"
         onChange={handleTransSearch}
        />
        </>
    )
}
export default SearchBar;