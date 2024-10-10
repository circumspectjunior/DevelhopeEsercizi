import React from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={0} increment={1} />
    </div>
  );
};

export default App;

