import React, {useEffect, useState} from 'react';
import Transactions from './Transactions';
import SearchBar from './SearchBar';
import AddTransactfom from './AddTransactFom';

//getting transactions from db
const TransactionsList=()=>{

    const [transactions, setTransactions]=useState([]);
    const [searchParameter, setSearchParameter]= useState("");
    const [filter, setFilter]= useState([])

    useEffect(() => {
      fetch(" http://localhost:3000/transactions")
      .then(resp => resp.json())
      .then(transactions => setTransactions(transactions));
  }, []);

  //post to db
  function handleAddTransaction(newTransaction){
    setTransactions([...transactions,newTransaction]);
      }

     // SearchBar function
     const transactionsList= transactions.filter((transaction) => transaction.description)

console.log(searchParameter);
     //delete transactions
     function handleDeleteTransaction(id){
        const updatedTransactions = transactions.filter(
            (transaction)=>transaction.id !== id);
            setTransactions(updatedTransactions)

     }
     const filteredTransactions=[...filter]
     const transactionss = [...transactions]
     return(
        <div>
            <SearchBar searchParameter={searchParameter} onTransSearch={setSearchParameter} setFilter={setFilter} transaction={transactions}/>
            <AddTransactfom onAddTransaction={handleAddTransaction} />


            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>delete</th>
                    </tr>
                </thead>
                {/* {transactionsList.map((transaction) =>
                    <Transactions key={transaction.id} transaction={transaction} onDeleteTransaction={handleDeleteTransaction} />
                )} */}

                {searchParameter.length>0 ? filteredTransactions.map((transaction) =>
                    <Transactions key={transaction.id} transaction={transaction} onDeleteTransaction={handleDeleteTransaction} />
                ):transactionss.map((transaction) =>
                <Transactions key={transaction.id} transaction={transaction} onDeleteTransaction={handleDeleteTransaction} />
            )}
            </table>
        </div>


     )









}

export default TransactionsList;