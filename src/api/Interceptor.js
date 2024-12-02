import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080/todo",
    // baseURL: "https://67495c82868020296630ab19.mockapi.io/todo",
    // baseURL: "https://67495c82868020296630ab19.mockapi.io/wrong-url",
    // baseURL: "https://67495c82868020296630ab19878.mockapi.io/todo",
    timeout: 5000,
})

instance.interceptors.request.use(
    (config) => {
        // calculate request time
        config.metadata = {startTime: new Date()};
        // 在发送请求之前添加认证头
        // config.headers['access_token'] = 'Bearer your_access_token';
        return config;
    },
    (error) => {
        console.error("Request Interceptor Error", error);
        return Promise.reject(error);
    }
)


instance.interceptors.response.use(
    (response) => {
        // calculate response time
        printUrlAndDuration(response);
        return response;
    },
    (error) => {
        printUrlAndDuration(error);
        console.error("Response Interceptor Error", error);
        if (error.status === 404) {
            // console.error("Response Interceptor Error", error.response);
            window.location.href = "/*";
        } else if (error.status === 500) {
            // console.error("Response Interceptor Error", error.response);
            window.location.href = "/server-error";
        }
        return Promise.reject(error);
    }
)

function printUrlAndDuration(response) {
    const endTime = new Date();
    const elapsedTime = endTime - response.config.metadata.startTime;
    console.log(`url: ${response.config.baseURL + response.config.url}, method: ${response.config.method}, duration: ${elapsedTime} ms`);
}
