import React, { Component } from "react";
import TableConfiguration from "./TableConfiguration";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeTables: [
        {
          tableColor: "RED",
          N: 8,
          X: 1,
          M: 29,
          W: 20,
          D: "LTR-UP",
          index: 0
        },
        {
          tableColor: "GREEN",
          N: 232,
          X: 1,
          M: 247,
          W: 30,
          D: "LTR-UP",
          index: 1
        },
        {
          tableColor: "BLUE",
          N: 47,
          X: 2,
          M: 81,
          W: 49,
          D: "RTL-UP",
          index: 2
        }
      ],
      currentTable: null
    };
    this.switchTables = this.switchTables.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }

  switchTables(e, props) {
    let tableEl = props.tableEl;
    let configurableTable = this.state["threeTables"][tableEl];

    this.setState({
      currentTable: configurableTable
    });

    /*  function grabs the inputs in the config component and updates that table's state */
  }
  updateTable(e, tableIndex, tableColor) {
    // if the input is empty, use the 'state.currentTable' input
    // remember to convert inputNums into numbers
    const inputIds = ["N", "X", "M", "W", "D"];
    const updatedTable = {};
    updatedTable.tableColor = tableColor;

    inputIds.forEach(ids => {
      document.getElementById(ids).value !== ""
        ? (updatedTable[ids] = document.getElementById(ids).value)
        : (updatedTable[ids] = this.state.currentTable[ids]);
    });
    updatedTable.index = tableIndex;

    this.setState(prevState => {
      let newThreeTables = prevState.threeTables.slice();
      newThreeTables[tableIndex] = updatedTable;
      return { threeTables: newThreeTables, currentTable: updatedTable };
    });
  }

  render() {
    console.log("should rerender after setting", this.state);
    const tables = [];
    const tableArr = this.state.threeTables;
    for (let i = 0; i < tableArr.length; i += 1) {
      let curTable = tableArr[i];
      tables.push(
        <Table
          key={i}
          tableEl={i}
          tableColor={curTable.tableColor}
          switchTables={this.switchTables}
        ></Table>
      );
    }

    return (
      <div>
        <h1>{`Tables Store`}</h1>
        {tables}

        {this.state.currentTable ? (
          <TableConfiguration
            currentTable={this.state.currentTable}
            updateTable={this.updateTable}
          ></TableConfiguration>
        ) : (
          <div>Pick a Table!</div>
        )}
      </div>
    );
  }
}

export default App;
