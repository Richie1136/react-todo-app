import Todo from "../todo/Todo"

const ToDolist = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo text={todo.text} id={todo.id} key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  )
}

export default ToDolist