import React from "react";

const Todo =({text,  todo, todos, setTodos})=> {
    //events
    const deleteHandler = () => {
       setTodos(todos.filter(el => el.id !== todo.id));
       
    }; 
const completedHandler
return(
    <div className="todo">
        <li className="todo-item">{text}</li>
    
    <button className="complete-btn"><i className="fas fa-check"></i></button>
    <button onClick={deleteHandler} lassName="trash-btn"><i className="fas fa-check"></i></button>
    </div>
);
}

export default Todo;