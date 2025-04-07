import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [datas, setDatas] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        setDatas(data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

  return (
    <>
      {loading ? 
      (<p>Loading........</p>) :
      (datas.map(data=>(
        <div key={data.id} className='box'>
          <p>{data.title}</p>
        </div>
      )))
      }
    </>
  )
}

export default App
