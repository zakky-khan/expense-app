import React from 'react';
import './App.css';
import Child from './child';
import {Transactionprovider} from "./Tcontext"


function App() {
  return (
    <Transactionprovider>
     <Child/> 
    </Transactionprovider>
  );
}

export default App;
