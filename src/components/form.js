import React from "react";
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (ev) => {
       
        setInputText(ev.target.value);
        
    };
    const submitToDoHandler = (ev) => {
        ev.preventDefault();
        setTodos([
            ...todos, {
              text: inputText, 
              completed: false,
              id: Math.random() * 1000
            },
        ]);
        setInputText("");
    };
    const statusHandler = (ev) => {
       setStatus(ev.target.value);
    };


    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" />
        <button onClick={submitToDoHandler} className="add-button" type="submit" >
        <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        <h1>what should I get done today</h1>
        </form>
        
        

    );
};

export default Form;