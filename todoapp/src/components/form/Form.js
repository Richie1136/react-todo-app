const Form = () => {
  return (
    <form>
      <input className="todo-input" type='text' />
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