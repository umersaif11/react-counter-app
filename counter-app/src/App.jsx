import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;
  const addValue = () => {
    counter ++;
    console.log(counter);
  }
  const removeValue = () => {
    counter --;
    console.log(counter);
  }
  return (
    <>
      <h1>Counter React App</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Increase Value</button>
      <br />
      <button
      onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
