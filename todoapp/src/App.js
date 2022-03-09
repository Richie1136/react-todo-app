import './App.css';
import Form from './components/form/Form';
import ToDolist from './components/todolist/ToDolist';

function App() {
  return (
    <div className="App">
      <h1>Richie's Todo list</h1>
      <Form />
      <ToDolist />
    </div>
  );
}

export default App;
