import React from  "react";
import TodoItem from "./components/TodoItem";
import Header from './components/header';
import "./style.css";
import Button from "./components/Button";
import CounterComponent from "./components/counterComponent";
const App=()=>{
  return (
    <div className="todo-container">
      <CounterComponent/>
      <center><Header head="Todoie App" /></center>
      <TodoItem text="Eat"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Code"/>
      <TodoItem text="Repeat"/>
     
      <Button/>
    </div>
  );
};

export default App;