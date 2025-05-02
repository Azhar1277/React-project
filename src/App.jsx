
import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const[time,setTime]= useState(0);

let timeref = useRef(null);

  function handleStart(){
   timeref.current= setInterval(()=>{
    setTime(time => time+1)

    }, 1000); 

  }
  function handleStop(){
    clearInterval(timeref.current);
    timeref.current= null;

  }
   function handleReset(){
    handleStop();
    setTime(0);

   }


  return (
    <div>

  <h3>Stopwatch:{time} seconds </h3>
  <button onClick={handleStart}>start</button>
  <br />
  <br />
  <button onClick={handleStop}>
    stop
  </button>
  <br />
  <br />
  <button onClick={handleReset}>reset</button>

   
    </div>
    
  )
}

export default App
