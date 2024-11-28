import TodoListGroup from "./TodoListGroup";
import {createContext, useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);


  return (
      <div>
          <h1>Todo List</h1>
          <TodoListGroup todoList={state}/>
          <TodoGenerator dispatch={dispatch}/>
      </div>
  )
}

export default TodoList