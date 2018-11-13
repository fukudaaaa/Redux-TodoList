import React from "react";

import AddTodo from "./containers/AddTodo";
import List from "./containers/List";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="App">
        <h2>Todo</h2>
        <AddTodo />
        <List />
      </div>
    );
  }
}

export default App;
