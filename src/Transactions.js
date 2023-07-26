import { useState,useEffect } from "react";
import React from "react";

function Transaction({search,filtered,transactions,setTransactions}){


function table(transaction){
  return(
    <tr key={transaction.id}>
    <td>{transaction.date}</td>
    <td>{transaction.description}</td>
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
    <button onClick={() =>handleDelete(transaction.id)}>delete</button>
    </tr>

  )
  }

  const filteredTransaction=filtered.map((transaction)=>{
  return table(transaction)})
  console.log(filtered);

  const nonFilteredTransaction=transactions.map((transaction)=>{
    return table(transaction)})
  
  

function handleDelete(id) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
      });
  } 

return(
<div>

    <table>
        <thead>
        <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Delete</th>

        </tr>
        </thead>
        <tbody>
          {search.length >0 ? filteredTransaction : nonFilteredTransaction}
      
            {/* {transactions.map((transaction)=>
            <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <button onClick={() =>handleDelete(transaction.id)}>delete</button>
            </tr>)} */}

        </tbody>
    </table>
</div>

)


}
export default Transaction;