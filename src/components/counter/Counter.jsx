import React, { useState } from "react";

export const Counter = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={restar}>➖</button>
      <p>{counter}</p>
      <button onClick={sumar}>➕</button>
    </div>
  );
};
