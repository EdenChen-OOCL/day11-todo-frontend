import TodoItem from "./TodoItem";
import todoItem from "./TodoItem";

const TodoListGroup = ({todoList}) => {
    return (
        <div>
            {todoList.map((todoItem, index) => <TodoItem todoItem={todoItem.text}/>)}
        </div>
    );
}

export default TodoListGroup;