import { useState } from 'react'
import './App.css'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Welcome age={16} name="john"/>
      </div>
    </>
  )
}

export default App
