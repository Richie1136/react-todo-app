import './App.css';
import Form from './components/form/Form';
import ToDolist from './components/todolist/ToDolist';
import { useState, useEffect, useCallback } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])


  // Run once when app first loads 

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
      setTodos(localTodo)
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])


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

  const saveLocalTodos = useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    handleFilter()
    saveLocalTodos()
  }, [status, todos, handleFilter, saveLocalTodos])

  // Save to Local Storage



  return (
    <div className="App">
      <h1>Richie's Todo list</h1>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
