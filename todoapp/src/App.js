import './App.css';
import Form from './components/form/Form';
import ToDolist from './components/todolist/ToDolist';
import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div className="App">
      <h1>Richie's Todo list</h1>
      <Form setInputText={setInputText} />
      <ToDolist />
    </div>
  );
}

export default App;
