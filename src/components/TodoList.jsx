import TodoListGroup from "./TodoListGroup";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoGenerator from "./TodoGenerator";
import {getTodoList} from "../api/TodoApi";
import {Pagination, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const TodoList = () => {
    const defaultPageIndex = 1;
    const defaultPageSize = 10;

    const {state, dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(defaultPageIndex);
    const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize);
    const [total, setTotal] = useState(defaultPageSize);

    useEffect(() => {
        pageTodoList(defaultPageIndex, defaultPageSize);
    }, []);

    const pageTodoList = (page, pageSize) => {
        setLoading(true);
        getTodoList().then((todoList) => {
            setCurrentPageIndex(page);
            setCurrentPageSize(pageSize);
            setTotal(todoList.length);
            // 计算起始索引
            const startIndex = (page - 1) * pageSize;
            // 计算结束索引
            const endIndex = startIndex + (pageSize -1);
            // 截取当前页的数据
            const pageList = todoList.slice(startIndex, endIndex);
            dispatch({eventType: "PAGE", payload: pageList});
        }).finally(() => {
            setLoading(false);
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
                    <Pagination
                        align="center"
                        current={currentPageIndex}
                        pageSize={currentPageSize}
                        onChange={pageTodoList}
                        onShowSizeChange={pageTodoList}
                        defaultCurrent={defaultPageIndex}
                        total={total}
                        showSizeChanger
                        showQuickJumper
                    />
                </div>

            }
        </div>
    )
}

export default TodoList