import React, { useState } from "react";

const Conversion = () => {
  //   let handleClick = () => {
  //     const userInput = window.prompt("Indiquez un chiffre");
  //     if (userInput !== null) {
  //       let inputValue = parseInt(userInput);
  //       console.log(inputValue);
  //       let celsiustoF = (inputValue * 9) / 5 + 32;
  //       alert(celsiustoF)
  //       console.log(celsiustoF);
  //     }
  //   };

  const [celsiustoF, setCelsiustoF] = useState("");
  const [fahrenheintoC, setfahrenheintoC] = useState("");

  let handleChange = (event) => {
    const inputValue = event.target.value;
    setCelsiustoF(inputValue.toString());

    if (inputValue !== "") {
      let eventMessage = parseFloat(inputValue);
      let celsiustoF = (eventMessage * 9) / 5 + 32;
      setCelsiustoF(celsiustoF.toFixed(2).toString());
    } else {
      setCelsiustoF("");
    }
  };

  let handleChanger = (event) => {
    const fahValue = event.target.value;
    setfahrenheintoC(fahValue.toString());

    if (fahValue !== "") {
      let fahMessage = parseFloat(fahValue);
      let fahrenheintoC = ((fahMessage - 32) * 5) / 9;
      setfahrenheintoC(fahrenheintoC.toFixed(2).toString());
    } else {
      setfahrenheintoC("");
    }
  };

  return (
    <div>
      {/* <button onClick={handleClick}>Convertir</button> */}
      conversation de Celsius en Fahrenheint
      <input type="number" onChange={handleChange}></input>
      <p>{celsiustoF}</p>
      conversation de Fahrenheint en Celsius
      <input type="number" onChange={handleChanger}></input>
      <p>{fahrenheintoC}</p>
    </div>
  );
};
export default Conversion;
