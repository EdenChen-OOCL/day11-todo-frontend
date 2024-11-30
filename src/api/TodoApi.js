import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c82868020296630ab19.mockapi.io/todo",
    timeout: 5000,
})

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