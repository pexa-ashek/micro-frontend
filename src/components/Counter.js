import React, { useState } from 'react';

export default () => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(prevNumber => prevNumber + 1);
  const decrement = () => setNumber(prevNumber => prevNumber - 1);

  return (
    <div>
      <input type="text" value={number} readOnly />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}