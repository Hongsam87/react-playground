import React from "react";
import CounterContainer from "./containers/CounterContainer";
import CounterThree from "./components/Counter/CounterThree";
import TodoList from "./components/Todo/TodoList";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      {/* <CounterContainer /> */}
      <CounterThree />
      <br />
      <TodoListContainer />
    </div>
  );
}

export default App;
