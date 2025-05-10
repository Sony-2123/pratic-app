// src/Task1_ReactState/FunctionalStateExample.js

import React, { useState } from 'react';

const FunctionalStateExample = () => {
  const [count, setCount] = useState(0); // declare state

  return (
    <div>
      <h2>Functional Component State Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalStateExample;
