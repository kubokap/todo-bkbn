import React, {useState, useEffect} from 'react';
import './App.css';

//importing components
import Form from "./components/form";
import ToDoList from "./components/todolist";

function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
//run on start 
  useEffect(() => {
    getLocal();
  }, []);

//useEffect

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, status]);

//functions
  const saveLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal); 
    }
  }


  const filterHandler = () => {
    switch (status) {

      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos);
        break;

  }
}
  return (
  
    <div className="App">
        <header>
          <h1>To do list</h1>
        </header>
          <Form 
            inputText = {inputText}
            setInputText ={setInputText}
            todos ={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            
          />
          <ToDoList 
            setTodos={setTodos}
            todos={todos}
            filteredTodos={filteredTodos}
            />
    </div>
  );
}

export default App;
