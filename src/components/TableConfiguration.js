import React from "react";

const TableConfiguration = props => {
  const currentTable = props.currentTable;
  const tableIndex = props.currentTable.index;
  const tableColor = currentTable.tableColor;

  const clearInputs = () => {
    const theInputsVars = ["N", "X", "M", "W", "D"];
    theInputsVars.forEach(ids => {
      document.getElementById(ids).value = "";
    });
  };

  return (
    <div>
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
      <input id={"W"} placeholder={currentTable.W}></input> <br />
      {"D = "}
      <input id={"D"} placeholder={currentTable.D}></input> <br />
      <button
        id={"ok"}
        onClick={e => props.updateTable(e, tableIndex, tableColor)}
      >
        ok
      </button>
      <button id={"cancel"} onClick={() => clearInputs()}>
        cancel
      </button>
    </div>
  );
};

export default TableConfiguration;
