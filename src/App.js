import React from 'react';
import './App.css';

// useDispatch and use useSelector is imported to use appropriate functions

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, signin } from './actions';



function App() {

  // store is called for counter and isLogged actions
  const counter= useSelector((state)=>state.counter);
  const isLogged= useSelector((state)=>state.isLogged);

  // actions dispatch called
  const dispatch= useDispatch(); 


 
  return (
    <div className='app'>
      <h2>counter: {counter}</h2>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      
      {
        isLogged ? <h3>Some important info</h3>: ""
      }
      <button onClick={()=>dispatch(signin())}>{isLogged?'Logout':'Login'}</button>
    </div>
  )
}

export default App
  