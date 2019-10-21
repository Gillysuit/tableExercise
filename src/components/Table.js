import React, { useEffect, useState } from "react";

const Table = props => {
  const [builtTable, setBuiltTable] = useState(null);
  useEffect(() => {
    let start = Number(props.tableData.N);
    let max = Number(props.tableData.M);
    let incr = Number(props.tableData.X);

    const tableData = [];
    let tableRow = [];
    let counter = 0;
    for (let i = start; i <= max; i += incr) {
      tableRow.push(<td>{i}</td>);
      counter = counter + 1;
      if (counter % 5 === 0 && counter !== 0) {
        tableData.unshift(<tr key={i}>{tableRow}</tr>);
        tableRow = [];
      }
      // condition checks if the row has less than 5 cells & fills it
      if (i === max && counter % 5 !== 0) {
        while (tableRow.length !== 5) {
          tableRow.push(<td style={{ background: "grey" }}>{""}</td>);
        }
        tableData.unshift(<tr key={i}>{tableRow}</tr>);
      }
    }

    setBuiltTable(tableData);
  }, [props.tableData]);

  return (
    <div
      style={{
        background: "white",
        maxWidth: `${props.tableData.W}` + "vw",
        border: "solid",
        borderWidth: "thin",
        borderColor: props.tableColor,
        marginLeft: "10px",
        marginRight: "10px",
        width: "100vw"
      }}
    >
      <table style={{ width: "100%" }}>
        <tbody>{builtTable}</tbody>
      </table>

      <button
        style={{ alignContent: "start" }}
        onClick={e => props.switchTables(e, props)}
      >{`configure`}</button>
    </div>
  );
};

export default Table;
