import TodoItem from "./TodoItem";

const TodoListGroup = ({todoList}) => {
    return (
        <div>
            // todo empty item
            {todoList.map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem}/>)}
        </div>
    );
}

export default TodoListGroup;