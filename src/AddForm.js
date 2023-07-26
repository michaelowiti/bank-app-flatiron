import React, { useState } from "react";

function AddForm({transactions,setTransactions}){
const [formData,setFormData]=useState({ 
   
date:"",
description: "",
category: "",
amount: 0})

const updateform = (e)=>{
   const {name ,value}= e.target
   setFormData({
       ...formData,
       [name]:value
   })

}


function handleFormSubmit(e){
   e.preventDefault();
   // const transactionData={
   //     date:formData.date,
   //     description:formData.description,
   //     category:formData.category,
   //     amount:formData.amount,
   // }
   console.log(formData);
   const newTransaction=[...transactions,formData]
   setTransactions(newTransaction)

    //post to add transaction
    const configObj={
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData)
    }
    fetch("http://localhost:3000/transactions",configObj)
   .then((res)=>res.json())
   .then((newTransaction)=>setFormData(newTransaction))
   

    //reset form after posting
    setFormData({
       date: "",
       description: "",
       category: "",
       amount: 0,
   }
   
   )
   
}

   return(

       <div className="ui segment">
       
       <form className="ui form"  onSubmit={handleFormSubmit}>
       <label for="date">Date:</label><br/>
       <input type="date" id="date" name="date" value={formData.date} onChange={updateform }/><br/>
      
       <label for="description">Description:</label><br/>
       <input type="text" id="description" name="description" value={formData.description} onChange={updateform }/><br/><br></br>

       <label for="category">Category:</label><br/>
       <input type="text" id="category" name="category" value={formData.category} onChange={updateform }/><br/><br/>

       <label for="Amount">Amount:</label><br/>
       <input type="number" id="amount" name="amount" value={formData.amount} onChange={updateform }/><br/><br/>

       <input type="submit" value="Submit"/>
       </form>
     </div>
     
   )

}
export default AddForm;
