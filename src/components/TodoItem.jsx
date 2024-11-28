import {useContext} from "react";
import {TodoContext} from "../App";

const TodoItem = ({todoItem}) => {
    const {dispatch} = useContext(TodoContext);

    const deleteItem = () => {
        dispatch({eventType: "DELETE", payload: todoItem.id});
    };

    const toggleDone = () => {
        dispatch({eventType: "TOGGLE_DONE", payload: todoItem.id});
    };

    return (
        <div>
            <span
                onClick={toggleDone}
                style={{
                    textDecoration: todoItem.done ? "line-through" : "none",
                    cursor: "pointer",
                    flexGrow: 1,
                }}
            >
                {todoItem.text}
            </span>
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

export default TodoItem;