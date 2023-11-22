import React, { useState } from "react";

const Conversion = () => {
  const [celsiusInput, setCelsiusInput] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handleCelsiusChange = (event) => {
    const inputValue = event.target.value;
    setCelsiusInput(inputValue.toString()); // Convertir en chaîne

    if (inputValue !== "") {
      const celsiusValue = parseFloat(inputValue);
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setConvertedValue(fahrenheitValue.toFixed(2).toString()); // Convertir en chaîne
    } else {
      setConvertedValue("");
    }
  };

  const handleFahrenheitChange = (event) => {
    // Ajoutez la logique pour la conversion inverse ici si nécessaire
  };

  return (
    <div>
      <div>
        Conversion de Celsius en Fahrenheit
        <input type="number" value={celsiusInput} onChange={handleCelsiusChange} />
        <p>Résultat en Fahrenheit: {convertedValue}</p>
      </div>
      <div>
        Conversion de Fahrenheit en Celsius
        {/* Ajoutez un champ et une logique similaire pour la conversion inverse ici */}
      </div>
    </div>
  );
};

export default Conversion;