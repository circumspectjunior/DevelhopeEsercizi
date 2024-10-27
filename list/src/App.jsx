import { useState } from 'react';
import './App.css';
import Colors from './Colors';


function App() {
  const [count, setCount] = useState(0)

  const colorData = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];
  

  return (
    <>
    <h1>Vite + React</h1>
      <div>

      <Colors col={colorData} />
        
      </div>
      
     
      
    </>
  )
}

export default App
