import React from 'react';
import './App.css';
//importing components
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
