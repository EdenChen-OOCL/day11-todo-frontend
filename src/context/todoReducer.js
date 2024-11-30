import {createTodoItem, getTodoList} from "../api/TodoApi";

export const initialState = [
  // {id: Date.now(), text: "the first todo", done: false},
  // {id: Date.now(), text: "the second todo", done: true},
];

export const todoReducer = (state, action) => {
  const {eventType, payload} = action;
  switch (eventType) {
    case "INIT":
      return payload;
    case "ADD":
      return [...state, payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== payload);
    case "TOGGLE_DONE":
      return state.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
      );
    case "EDIT":
        return state.map((todo) =>
            todo.id === payload.id ? { ...todo, text: payload.text } : todo
        );
    default:
        return state;
  }
};