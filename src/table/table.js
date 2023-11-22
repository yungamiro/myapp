import React, { useState } from "react";
import "./Table.css";

const Tables = () => {
  const numberRows = 15;
  const numberColumns = 6;

  const [check, setCheck] = useState(false);
  const [tableData, setTableData] = useState(
    Array.from({ length: numberRows }, () =>
      Array.from({ length: numberColumns }, () => "")
    )
  );

  const handleCellChange = (rowIndex, colIndex, Value) => {
    const updatedTableData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === colIndex ? Value : cell))
        : row
    );

    setTableData(updatedTableData);
  };

  return (
    <table className="mainTable">
      <thead>
        <tr>
          {Array.from({ length: numberColumns }, (_, index) => (
            <th className="mainBlock" key={index}>
              Colonne {index + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td className="mainTd" key={colIndex}>
                {colIndex === 2 ? (
                  <input
                    type="email"
                    maxLength={24}
                    value={cell}
                    onChange={(e) =>
                      handleCellChange(rowIndex, colIndex, e.target.value)
                    }
                  />
                ) : colIndex === 5 ? (
                  <input
                    className="mainCheckbox"
                    type="checkbox"
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                ) : (
                  <div
                    contentEditable={true}
                    onInput={(e) =>
                      handleCellChange(
                        rowIndex,
                        colIndex,
                        e.currentTarget.innerText
                      )
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