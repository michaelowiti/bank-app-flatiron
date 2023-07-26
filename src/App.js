import { useState,useEffect } from "react";
import './App.css';
import Transaction from './Trasactions';
import AddForm from './AddForm';
import SearchBar from './SearchBar';



function App() {
  const [search,setSearch]=useState("")
  const [filtered, setFiltered] =useState([])

  const [transactions,setTransactions]= useState([]);
  useEffect(() => {
      fetch(" http://localhost:3000/transactions")
      .then(resp => resp.json())
      .then(transactions => setTransactions(transactions));
  }, []);
  return (
    <div className="App">
      <SearchBar filtered={filtered} setFiltered={setFiltered} search={search}setSearch={setSearch} transactions={transactions}  setTransactions={setTransactions}/>
      <AddForm  transactions={transactions}setTransactions={setTransactions}/>
      <Transaction  search={search} filtered={filtered} transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default App;
