import TodoListGroup from "./TodoListGroup";
import {createContext, useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);


  return (
      <div>This is the TodoList Component.</div>
  );
}

export default TodoList