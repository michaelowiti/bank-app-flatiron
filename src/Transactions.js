import React from "react";

const Transactions=({transaction,onDeleteTransaction})=>{
    const  {date,description,category,amount}= transaction;

    //delete transaction
    function handleDeleteTransaction(){
        fetch(`http://localhost:3000/transactions/${transaction.id}`,{
            method: "DELETE",})
            .then((res)=>res.json())
            .then(()=>onDeleteTransaction(transaction))
        
    }



return (
    <tbody>
    <tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
    <td>
    <button  style={{ color: "red" }}  onClick={handleDeleteTransaction}>Delete</button>
    </td>
  </tr>
  </tbody>
)
}

export default Transactions;