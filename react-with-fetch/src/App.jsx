import { useState } from 'react'
import './App.css'
import GitHubUsers from './GitHubUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fetch Example</h1>

      <div>
        <GitHubUsers />
      </div>
    </>
  )
}

export default App
