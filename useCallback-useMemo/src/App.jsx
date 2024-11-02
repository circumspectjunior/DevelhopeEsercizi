import './App.css';
import FilteredList from './filteredList';
import { useCounter } from './useCounter';


function App() {
  const {increment, decrement, reset, count} = useCounter(0);

  const users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 19 },
  ];
  

  return (
    <>
      <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h1>Filtered List</h1>
        <ul>
          <FilteredList list={users}/>
        </ul>

      </div>
    </>
  )
}

export default App
