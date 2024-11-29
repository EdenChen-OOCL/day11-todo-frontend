import TodoListGroup from "./TodoListGroup";
import {createContext, useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";
import {getTodoList} from "../api/TodoApi";

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodoList().then((todoList) => {
            dispatch({eventType: "INIT", payload: todoList});
        })
    }, []);

  return (
      <div>
          <h1>Todo List</h1>
          <TodoListGroup todoList={state}/>
          <TodoGenerator/>
      </div>
  )
}

export default TodoList