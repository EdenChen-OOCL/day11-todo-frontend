import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodoItem, editTodoItem, updateTodoItem} from "../api/TodoApi";
import {Button, Drawer, Modal} from "antd";

const TodoItem = ({todoItem}) => {
    const {dispatch} = useContext(TodoContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tempText, setTempText] = useState(todoItem.text);

    const showModal = () => {
        setIsModalOpen(true);
    };

    function closeModal() {
        setIsModalOpen(false);
    }

    const handleOk = () => {
        const payload = {id: todoItem.id, text: tempText};
        editTodoItem(payload).then((response) => {
            dispatch({eventType: "EDIT", payload: response});
        }).finally(() => {
            closeModal();
        });
    };

    const handleCancel = () => {
        setTempText(todoItem.text);
        closeModal();
    };

    const deleteItem = async () => {
        const response = await deleteTodoItem(todoItem.id);
        dispatch({eventType: "DELETE", payload: response.id});
    };

    const toggleDone = async () => {
        const payload = {id: todoItem.id, text: todoItem.text, done: !todoItem.done};
        const response = await updateTodoItem(payload);
        dispatch({eventType: "TOGGLE_DONE", payload: response.id});
    };

    const changeItemText = (event) => {
        setTempText(event.target.value);
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span className={"todo-item"}
                onClick={toggleDone}
                style={{
                    textDecoration: todoItem.done ? "line-through" : "none",
                    cursor: "pointer",
                    flexGrow: 1,
                }}
            >
                {todoItem.text}
            </span>
            <Button type="primary" onClick={showModal}>
                Edit
            </Button>
            <Modal title="Edit Todo Text" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input value={tempText} onChange={changeItemText}/>
            </Modal>
            <Button type={"primary"} danger onClick={deleteItem}>
                Delete
            </Button>
        </div>
    );
}

export default TodoItem;