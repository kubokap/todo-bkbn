import React from "react";
//import components
import Todo from "./todo"

const ToDoList = ({todos}) => {
    return(
    <div className="todo-container">
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo text={todo.text} />
            ))}
          
        </ul>
    </div>
    );
};

export default ToDoList;