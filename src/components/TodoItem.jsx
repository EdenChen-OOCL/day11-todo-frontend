import {useContext} from "react";
import {TodoContext} from "../App";
import {updateTodoItem} from "../api/TodoApi";

const TodoItem = ({todoItem}) => {
    const {dispatch} = useContext(TodoContext);

    const deleteItem = () => {
        dispatch({eventType: "DELETE", payload: todoItem.id});
    };

    const toggleDone = async () => {
        const payload = {id: todoItem.id, text: todoItem.text, done: !todoItem.done};
        const response = await updateTodoItem(payload);
        dispatch({eventType: "TOGGLE_DONE", payload: response.id});
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span class={"todo-item"}
                onClick={toggleDone}
                style={{
                    textDecoration: todoItem.done ? "line-through" : "none",
                    cursor: "pointer",
                    flexGrow: 1,
                }}
            >
                {todoItem.text}
            </span>
            <button onClick={deleteItem} style={{color:"red"}}>X</button>
        </div>
    );
}

export default TodoItem;