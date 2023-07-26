import React, { useState } from "react";
function SearchBar({search,filtered,setFiltered, setSearch,transactions,setTransactions}){
    

    

    function handleChange(search){
        setSearch(search)
        const updatedList=[...transactions]
       
    
    //     const filteredTransactions=transactions.filter((transaction)=>transaction.category.toLowerCase() === search)
    //     setFiltered(filteredTransactions)
    //     console.log(filtered);
    //
    if(search !==""){
        const filteredArray=[...transactions]
       const filter= filteredArray.filter((transaction)=>transaction.description.toLowerCase() === search);
       
   console.log(filter);
     setFiltered(filter)

        }
        else {
            setFiltered(transactions)
        }
}
    
    
    
return (
    <div>
        <input name="searchbar" placeholder="search transaction" value={search} onChange={(e)=>handleChange(e.target.value)}/>
        <i className="circular search link icon"></i>
    </div>
)
}
export default SearchBar;