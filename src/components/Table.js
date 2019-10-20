import React from "react";

const Table = props => {
  return (
    <div>
      <button
        onClick={e => props.switchTables(e, props)}
      >{`config ${props.tableColor}`}</button>
    </div>
  );
};

export default Table;
