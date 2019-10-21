import React, { useState } from "react";

const TableConfiguration = props => {
  // attempt at cleaning up variable names
  const currentTable = props.currentTable;
  const tableIndex = props.currentTable.index;
  const tableColor = currentTable.tableColor;

  // this will keep a local state of the select dropdown options and pass it through a props.handler function
  const [selectOption, setSelectOption] = useState(null);

  const handleSelectOption = e => {
    setSelectOption(e.target.value);
  };

  return (
    <div style={{ background: "#eee", maxWidth: "30vw", marginTop: "20px" }}>
      <div>
        Table:
        <h4 style={{ color: currentTable.tableColor }}>
          {currentTable.tableColor}
        </h4>
      </div>
      {"N = "}
      <input id={"N"} placeholder={currentTable.N}></input> <br />
      {"X = "}
      <input id={"X"} placeholder={currentTable.X}></input> <br />
      {"M = "}
      <input id={"M"} placeholder={currentTable.M}></input> <br />
      {"W = "}
      <input id={"W"} placeholder={currentTable.W}></input> {" %"}
      <br />
      {"D = "}
      <select
        id={"D"}
        value={selectOption ? selectOption : currentTable.D}
        onChange={e => handleSelectOption(e)}
      >
        <option value="LTR-UP">LTR-UP</option>
        <option value="LTR-DOWN">LTR-DOWN</option>
      </select>
      <br />
      <button
        id={"ok"}
        onClick={e =>
          props.updateTable(e, tableIndex, tableColor, selectOption)
        }
      >
        ok
      </button>
      <button id={"cancel"} onClick={() => props.clearInputs()}>
        cancel
      </button>
    </div>
  );
};

export default TableConfiguration;
