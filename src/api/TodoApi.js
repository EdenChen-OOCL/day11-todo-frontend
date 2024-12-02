import {instance} from "./Interceptor";

export const getTodoList = async () => {
    const response = await instance.get("/todoItem");
    return response.data;
}

export const createTodoItem = async (newTodoItem) => {
    const response = await instance.post("/todoItem", newTodoItem);
    return response.data;
}

export const updateTodoItem = async (updatedTodoItem) => {
    const response = await instance.put(`/todoItem/${updatedTodoItem.id}`, updatedTodoItem);
    return response.data;
}

export const deleteTodoItem = async (id) => {
    const response = await instance.delete(`/todoItem/${id}`);
    return response.data;
}

export const editTodoItem = async (updateTodoItem) => {
    const response = await instance.put(`/todoItem/${updateTodoItem.id}`, updateTodoItem);
    return response.data;
}