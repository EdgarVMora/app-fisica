import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import React from 'react';
//import React, {useEffect} from 'react';

let dato = 5;

function App() {
  console.log("hola Mundo")
  const suma = (a, b) => {
    return a + b
  }
  useEffect(()=> {
    let a = 5;
    let b = 2;
    let resultado = suma(a,b)

    console.log(resultado);
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>El valor del primer dato es: {dato}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
