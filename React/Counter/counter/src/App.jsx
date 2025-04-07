import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleInc(){
    setCount(prev=> prev+1)
  }

  function handleDec(){
    setCount(prev=> prev-1)
  }

  function handleReset(){
    setCount(0)
  }

  return (
    <>
      <div id='counter'>
        <h1>counter:{count}</h1>
        <div>
        <button className='btn' onClick={handleInc}>Inc</button>
        <button className='btn' onClick={handleDec}>Dec</button>
        <button className='btn' onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
