import TodoListGroup from "./TodoListGroup";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";
import {getTodoList} from "../api/TodoApi";
import {Flex, Pagination, Spin} from "antd";
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

    return (
        <div>
            {loading ?
                <div>
                    <Spin indicator={<LoadingOutlined spin/>} spinning={loading}/>
                </div>:
                <div>
                    <h1>Todo List</h1>
                    <TodoListGroup todoList={state}/>
                    <TodoGenerator/>
                    {/*<Pagination align="center" defaultCurrent={1} total={50} />*/}
                </div>

            }
        </div>
    )
}

export default TodoList