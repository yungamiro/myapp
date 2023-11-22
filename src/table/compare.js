import React, { useState } from "react";
import "./Table.css";

const Tables = () => {
  const numberOfRows = 15;
  const numberOfColumns = 6;

  const [check, setCheck] = useState(false);
  const [tableData, setTableData] = useState(
    Array.from({ length: numberOfRows }, () =>
      Array.from({ length: numberOfColumns }, () => "")
    )
  );

  const handleCellChange = (rowIndex, colIndex, newValue) => {
    const updatedTableData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === colIndex ? newValue : cell))
        : row
    );

    setTableData(updatedTableData);
  };

  return (
    <table>
      <thead>
        <tr>
          {Array.from({ length: numberOfColumns }, (_, index) => (
            <th key={index}>Column {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, colIndex) => (
          <tr key={colIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                {colIndex === 2 ? (
                  <input
                    type="email"
                    value={cell}
                    onChange={(e) =>
                      handleCellChange(colIndex, colIndex, e.target.value)
                    }
                  />
                ) : colIndex === 5 ? (
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                ) : (
                  <div
                    contentEditable={true}
                    onInput={(e) =>
                      handleCellChange(colIndex, colIndex, e.currentTarget.innerText)
                    }
                  >
                    {cell}
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
