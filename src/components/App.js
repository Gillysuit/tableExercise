import React, { Component } from "react";
import TableConfiguration from "./TableConfiguration";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "3Tables": [
        {
          tableColor: "RED",
          N: 8,
          X: 1,
          M: 29,
          W: 20,
          D: "LTR-UP"
        },
        {
          tableColor: "GREEN",
          N: 232,
          X: 1,
          M: 247,
          W: 30,
          D: "LTR-UP"
        },
        {
          tableColor: "BLUE",
          N: 47,
          X: 2,
          M: 81,
          W: 49,
          D: "RTL-UP"
        }
      ],
      currentTable: null
    };
    this.switchTables = this.switchTables.bind(this);
  }

  switchTables(e, props) {
    let tableEl = props.tableEl;
    let configurableTable = this.state["3Tables"][tableEl];

    this.setState({
      currentTable: configurableTable
    });
    console.log("state setting", this.state);
  }
  render() {
    console.log("should rerender after setting", this.state);
    const tables = [];
    const tableArr = this.state["3Tables"];
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
          ></TableConfiguration>
        ) : (
          <div>Pick a Table!</div>
        )}
      </div>
    );
  }
}

export default App;
