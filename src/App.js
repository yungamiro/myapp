import CalculMoyenne from "./functions/calcul";
import React from "react";
import Conversion from "./functions/conversion";
import Vowels from "./functions/Vowels"
import MyTable from "./table/table";
import FibonacciLogic from "./functions/fibonacci";
import Capitalize from "./functions/capitalize";

function App() {
  return (
    <div className="App">
      <div className="class"></div>
      <CalculMoyenne />
      <Conversion />
      <Vowels />
      <MyTable />
      <FibonacciLogic />
      <Capitalize />
    </div>
  );
}

export default App;
