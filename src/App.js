import React, {useState} from 'react';
import './App.css';
//importing components
import Form from "./components/form";
import ToDoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [ todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form 
      inputText = {inputText}
      setInputText ={setInputText}
      todos ={todos}
      setTodos={setTodos}/>
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
