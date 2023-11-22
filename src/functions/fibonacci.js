import React, { useState } from "react";

const FibonacciLogic = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFibonacci = () => {
    let fibArray = [0, 1];
    for (let i = 2; i <= number; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    setResult(fibArray[number]);
  };

  return (
    <div>
      <label>
        Entez un nombre:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </label>
      <button onClick={calculateFibonacci}>Calculate</button>
      <p>
        Pour le {number} le resultat de la suite de Fibonacci est: {result}
      </p>
    </div>
  );
};

export default FibonacciLogic;
