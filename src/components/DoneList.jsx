import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const DoneList = () => {
    const {state: todoList} = useContext(TodoContext);

    return (
        todoList.filter((todo) => todo.done).map((todo) => {
            return <div>{todo.text}</div>
        })
    )
        ;
}

export default DoneList;