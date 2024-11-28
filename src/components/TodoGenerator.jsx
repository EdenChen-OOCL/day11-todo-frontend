import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {
    const {dispatch} = useContext(TodoContext);

    const [todoText, setTodoText] = useState("");

    const typeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const addTodoItem = () => {
        dispatch({eventType:"ADD", payload:todoText});
    };
    return (
        <div>
            <input value={todoText} onChange={typeTodoText}/>
            <button onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;