import React, { useEffect, useState } from "react";

const Table = props => {
  const [builtTable, setBuiltTable] = useState(null);
  useEffect(() => {
    let start = props.tableData.N;
    let max = props.tableData.M;
    let incr = props.tableData.X;

    const tableData = [];
    let tableRow = [];
    let counter = 0;
    for (let i = start; i <= max; i += incr) {
      tableRow.push(<td>{i}</td>);
      counter = counter + 1;
      if (counter % 5 === 0 && counter !== 0) {
        tableData.push(<tr>{tableRow}</tr>);
        tableRow = [];
      }
      console.log(CustomElementRegistry);
      // add condition if we're at max && counter % 5 !== 0
      // while tableRow.length !== 5  tableRow.push(<td>"")
    }

    setBuiltTable(tableData);
  }, [props.tableData]);

  return (
    <div style={{ maxWidth: `${props.tableData.W}` + "vw" }}>
      <table>
        <tbody>{builtTable}</tbody>
      </table>

      <button
        onClick={e => props.switchTables(e, props)}
      >{`config ${props.tableColor}`}</button>
    </div>
  );
};

export default Table;
