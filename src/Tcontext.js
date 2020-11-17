import React,{createContext, useReducer} from 'react'
import TransactionReducer from "./transReducer"

const initialtransaction = [
    {desc: "Cash"   ,amount: 500},
    {desc: "Book"   ,amount: -40},
    {desc: "Camera" ,amount: -200}
  ]

  const tcontext = createContext(initialtransaction)

 const Transactionprovider= ({children}) =>{
    const [state, dispatch] = useReducer (TransactionReducer, initialtransaction)
    
    function addTransaction(transObj){
      dispatch({
        type: "ADD_TRANSACTION",
        payload: {desc: transObj.desc   ,amount: transObj.amount},
      })

    }
    return(
     <tcontext.Provider value ={{
      transaction: state, 
      addTransaction: addTransaction
    }}>
      {children}
    </tcontext.Provider>

)}




  export default tcontext;
  export {Transactionprovider};
 