import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {createTodoItem} from "../api/TodoApi";

const TodoGenerator = () => {
    const {dispatch} = useContext(TodoContext);

    const [todoText, setTodoText] = useState("");

    const typeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const addTodoItem = async () => {
        if(todoText.trim() === "") {
            return;
        }

        let newTodoItem = {
            "text": todoText,
            "done": false,
        };
        const response = await createTodoItem(newTodoItem);

        dispatch({eventType:"ADD", payload: response});
    };
    return (
        <div>
            <input value={todoText} onChange={typeTodoText}/>
            <button onClick={addTodoItem} style={{color:"white", backgroundColor:"rgb(65,159,255)", border:"hidden"}}>add</button>
        </div>
    );
}

export default TodoGenerator;