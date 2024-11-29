import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c82868020296630ab19.mockapi.io/todo",
    timeout: 5000,
})

export const getTodoList = async () => {
    const response = await instance.get("/todoItem");
    return response.data;
}