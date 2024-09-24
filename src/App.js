import logo from './logo.svg';
import './App.css';
import React from 'react';
import Operaciones from './UI/operaciones'
//import React, {useEffect} from 'react';

let a = 5
let b = 6
let resultado

function suma(){
 resultado = a + b
 return resultado
}

function App() {  
  return (
    <div className="App">
    <Operaciones/>
    
     
    </div>
  );
}

export default App;
