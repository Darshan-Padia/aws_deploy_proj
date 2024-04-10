
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [txt, setTxt] = useState('')
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.text())
      .then((data) => setTxt(data))
  }
  , [])
  return (
    <>
      <div
      className='text-4xl text-center'
      >
        {txt}

      </div>
       
    </>
  )
}

export default App
