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
          N: 231,
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
          W: 40,
          D: "RTL-UP",
          index: 2
        }
      ],
      currentTable: null,
      screenWidth: 0
    };
    this.switchTables = this.switchTables.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.updateScreenWidth = this.updateScreenWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateScreenWidth);
  }

  updateScreenWidth() {
    this.setState({ screenWidth: window.innerWidth });
  }

  switchTables(e, props) {
    let tableEl = props.tableEl;
    let configurableTable = this.state["threeTables"][tableEl];

    this.setState({
      currentTable: configurableTable
    });
  }

  /*  function grabs the inputs in the config component and updates that table's state */
  updateTable(e, tableIndex, tableColor) {
    // if the input is empty, use the 'state.currentTable' input
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
    const tables = [];
    const tableArr = this.state.threeTables;
    for (let i = 0; i < tableArr.length; i += 1) {
      let curTable = tableArr[i];
      let tableColor = curTable.tableColor;
      tables.push(
        <Table
          key={i}
          tableEl={i}
          tableColor={tableColor}
          switchTables={this.switchTables}
          tableData={curTable}
        ></Table>
      );
    }
    // rule 6: remove BlueTable at certain width
    if (this.state.screenWidth < 470) tables.pop();

    return (
      <div>
        <h1>{`Tables Store`}</h1>
        <div className={"tables"} style={{ display: "flex" }}>
          {tables}
        </div>

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
