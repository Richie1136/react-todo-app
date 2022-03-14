import './App.css';
import Form from './components/form/Form';
import ToDolist from './components/todolist/ToDolist';
import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <h1>Richie's Todo list</h1>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDolist todos={todos} />
    </div>
  );
}

export default App;
