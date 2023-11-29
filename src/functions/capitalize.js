import { useState } from "react";

const Capitalize = () => {
  const [inputState, setInputState] = useState("");

  const capitalizeChange = (e) => {
    const inputValue = e.target.value;
    let capitalizedInput = inputValue
      .split(" ")
      .map((w) => w.replace(w.charAt(0), w.charAt(0).toUpperCase()))
      .join(" ");
    console.log("ici", capitalizedInput);
    setInputState(capitalizedInput);
  };

  return (
    <div>
      <input type="text" value={inputState} onChange={capitalizeChange} />
    </div>
  );
};

export default Capitalize;
