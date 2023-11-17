import React, { useState } from "react";
// import "./counters.css"

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-cont">
      <button className="plusym" onClick={decrement}>-</button>
      <span> {count}</span>
      <button className="plusyp" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

// src/components/Counter.js
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// export default Counter;

