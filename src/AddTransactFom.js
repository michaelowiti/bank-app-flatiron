import React, { useState } from "react";


const AddTransactfom=({onAddTransaction})=>{
    const [fomData, setFomData]= useState({
        date: "",
        description: "",
        category: "",
        amount: 0,
    });


    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        setFomData({...fomData, [name]: value })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        const transactionData ={
            date:fomData.date,
            description:fomData.description,
            category:fomData.category,
            amount:fomData.amount
        }
    


    //post to add transaction
    const configObj={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData)
    }

    fetch("http://localhost:3000/transactions",configObj)
    .then((res)=>res.json())
    .then((newTransaction)=>onAddTransaction(newTransaction))

    //reset form after posting
    setFomData({
        date: "",
        description: "",
        category: "",
        amount: 0,
    })
}

return (
    <div className="ui segment">
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="inline fields">
                <label id="date">
                    <input type="date" name="date" value={fomData.date} onChange={handleChange}/>

                </label>
                <input type="text" name="description" value={fomData.description} placeholder="description" onChange={handleChange}/>
                <input type="text" name="category" value={fomData.category} placeholder="category" onChange={handleChange}/>
                <input type="number" name="amount" value={fomData.amount} placeholder="Amount" onChange={handleChange}/>

            </div>
            <button className="ui button" type="submit" style={{ color: "grey" }}>Add Transaction</button>

        </form>

    </div>

)

}

export default AddTransactfom;