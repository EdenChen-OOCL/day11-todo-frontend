export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  const {eventType, payload} = action;
  switch (eventType) {
    case "ADD":
      return [...state, {id: Date.now(), text: payload, done: false}];
    default:
        return state;
  }
};