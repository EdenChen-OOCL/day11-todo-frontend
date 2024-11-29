export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: true},
];

export const todoReducer = (state, action) => {
  const {eventType, payload} = action;
  switch (eventType) {
    case "ADD":
      return [...state, {id: Date.now(), text: payload, done: false}];
    case "DELETE":
      return state.filter((todo) => todo.id !== payload);
    case "TOGGLE_DONE":
      return state.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
      );
    default:
        return state;
  }
};