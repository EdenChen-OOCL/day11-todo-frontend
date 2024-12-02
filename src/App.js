import React, {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";
import {HelpPage} from "./components/HelpPage";
import {NavigationTags} from "./components/NavigationTags";
import {ServerError} from "./components/ServerError";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <NavigationTags/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/todo-list'}/>}/>
                        <Route path={'/todo-list'} element={<TodoList/>}></Route>
                        <Route path={'/done-list'} element={<DoneList/>}></Route>
                        <Route path={'/help'} element={<HelpPage/>}></Route>
                        <Route path={'/server-error'} element={<ServerError/>}></Route>
                        <Route path={'*'} element={<NotFound/>}></Route>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
