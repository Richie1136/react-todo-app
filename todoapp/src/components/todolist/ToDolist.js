import Todo from "../todo/Todo"

const ToDolist = ({ todos }) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => {
          return <Todo text={todo.text} />
        })}
      </ul>
    </div>
  )
}

export default ToDolist