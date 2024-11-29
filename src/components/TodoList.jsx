import TodoListGroup from "./TodoListGroup";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";
import {getTodoList} from "../api/TodoApi";
import {Pagination, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodoList().then((todoList) => {
            dispatch({eventType: "INIT", payload: todoList});
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const pageTodoList = (page, pageSize) => {
        getTodoList(page, pageSize).then((todoList) => {
            dispatch({eventType: "INIT", payload: todoList});
        });
    };

    return (
        <div>
            {   loading ?
                <div>
                    <Spin indicator={<LoadingOutlined spin/>} spinning={loading}/>
                </div> :
                <div>
                    <h1>Todo List</h1>
                    <TodoListGroup todoList={state}/>
                    <TodoGenerator/>
                    <Pagination align="center" onChange={pageTodoList} defaultCurrent={1} total={50} showSizeChanger showQuickJumper />
                </div>

            }

        </div>
    )
}

export default TodoList