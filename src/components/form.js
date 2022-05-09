import React from "react";
const Form = ({inputText, setInputText, todos, setTodos}) => {

   //const time = () => {
   //     const current = new Date();
   //    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   //};
    const inputTextHandler = (ev) => {
        console.log(ev.target.value);
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

    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" />
        <button onClick={submitToDoHandler} className="add-button" type="submit" >
        <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter">
                <option value="all">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
        <h1>Hey </h1>
        </form>
        
        

    );
};

export default Form;