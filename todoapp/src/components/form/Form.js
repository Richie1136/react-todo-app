import { v4 as uuid } from 'uuid'

const Form = ({ setInputText, setTodos, todos, inputText }) => {

  const handleInputText = (event) => {
    setInputText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: uuid() }
    ])
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} onChange={handleInputText} className="todo-input" type='text' />
      <button className="todo-button" type='submit'>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select className="filter-todo" name='todos'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form