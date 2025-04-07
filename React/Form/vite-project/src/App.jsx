import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")

  function handleClick() {
    console.log(input)
    
  }

  return (
    <>
      <div className='box'>
        <input 
          type="text" 
          value={input} 
          placeholder='Enter the value' 
          onChange={(e) => setInput(e.target.value)} // <- update state
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  )
}

export default App
