import TodoItem from "./TodoItem";
import todoItem from "./TodoItem";

const TodoListGroup = ({todoList}) => {
    return (
        <div>
            {todoList.map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem}/>)}
        </div>
    );
}

export default TodoListGroup;