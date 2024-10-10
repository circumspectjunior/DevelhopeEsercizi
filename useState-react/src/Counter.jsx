import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue, increment }) => {
  const [counter, setCounter] = useState(initialValue);

  const controlIncrement = () => {
    setCounter(prevCounter => prevCounter + increment);
  };

  const controlDecrement = () => {
    setCounter(prevCounter => prevCounter - increment);
  };

  const controlReset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={controlIncrement}>Increment</button>
      <button onClick={controlDecrement}>Decrement</button>
      <button onClick={controlReset}>Reset</button>
    </div>
  );
};

export default Counter;
