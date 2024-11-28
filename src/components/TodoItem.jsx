import {useContext} from "react";
import {TodoContext} from "../App";

const TodoItem = ({todoItem}) => {
    const {dispatch} = useContext(TodoContext);

    const deleteItem = () => {
        dispatch({eventType: "DELETE", payload: todoItem.id});
    };

    return (
        <div>
            <span>
                {todoItem.text}
            </span>
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

export default TodoItem;