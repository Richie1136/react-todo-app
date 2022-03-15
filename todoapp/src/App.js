import './App.css';
import Form from './components/form/Form';
import ToDolist from './components/todolist/ToDolist';
import { useState, useEffect, useCallback } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const handleFilter = useCallback(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }, [setFilteredTodos, status, todos])

  useEffect(() => {
    handleFilter()
  }, [status, todos, handleFilter])


  return (
    <div className="App">
      <h1>Richie's Todo list</h1>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
