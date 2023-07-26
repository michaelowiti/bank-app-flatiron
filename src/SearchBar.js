import React from 'react';


const SearchBar=({searchParameter,onTransSearch,setFilter,transaction})=>{
    function handleTransSearch(e){
        let search=e.target.value
        onTransSearch(search)
        console.log(search);

        if(search !==""){
        const filteredArray=[...transaction]
       const filter= filteredArray.filter((item)=>item.description.toLowerCase() === search);
       console.log(filter);
       setFilter(filter)
        }
        else {
            setFilter(transaction)
        }
       
        

    }
    

    return(
        <>
        <input type="text"
         name="searchbar"
         value={searchParameter}
         placeholder="search transaction"
         onChange={handleTransSearch}
        />
         <i className="circular search link icon"></i>
        </>
    )
}
export default SearchBar;