import React,{useContext, useState} from 'react';
import tcontext from "./Tcontext";

function Child() {
  const {transaction, addTransaction} = useContext(tcontext);
  const [newDesc, setDesc] = useState("");
  const [newAmount, setAmount] = useState(0);
  
  const handleAddition =(event)=>{
    event.preventDefault();
    if(Number(newAmount) === 0){
       alert("Please enter correct value")
        return false;
      }
       addTransaction({
      amount: Number(newAmount),
      desc: newDesc

    });
    setDesc("");
    setAmount(0)


  }

  const getIncome = ()=>{
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0)
      income += transaction[i].amount
    }
    return income;
  }



  const getExpense = ()=>{
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0)
      expense += transaction[i].amount
    }
    return expense;
  }

  
  // const transaction = [
  //   {desc: "Cash"   ,amount: 500},
  //   {desc: "Book"   ,amount: -40},
  //   {desc: "Camera" ,amount: -200}
  // ]
  return (
   <div className = "box">

    <h1 className="header">Expence Tracker</h1>
    <h3>YOUR BALANCE <br/>{getIncome() + getExpense()}</h3>


    <div className= "exp-c">
    <h3>INCOME <br/> {getIncome()}</h3>
    <h3>EXPENCE <br/> {getExpense()}</h3>
    </div>

    <h3>History</h3><hr/>
    
    <ul className= "list-c">
      {transaction.map((transObj, ind)=>{
        return(<li key = {ind}>
        <span>{transObj.desc}</span>
        <span>{transObj.amount}</span>
      </li>) 
       })}

       </ul>



{/*  <li>
        <span>Cash</span>
        <span>+500</span>
      </li>

      <li>
        <span>Cash</span>
        <span>+500</span>
      </li>

      <li>
        <span>Cash</span>
        <span>+500</span>
      </li> */}

    

    <h3>Add new transaction</h3><hr/>

    <form className= "form-c" onSubmit={handleAddition}>
      <label>
        Enter Description <br/>
        <input type="text"
        value={newDesc}
        placeholder= "description"
         onChange={(ev)=>setDesc(ev.target.value)} required/>
      </label>
      <br/>
      


      <label>
        Enter Amount <br/>
        <input type="number" 
         value={newAmount}         
        placeholder= "Amount"
        onChange={(ev)=>setAmount(ev.target.value)} required/>
      </label>
      <br/>

      <input type ="submit" value = "Add Transcation"/>

    </form>






   </div>
   











  );
}

export default Child;