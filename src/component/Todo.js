const Todo = ({ text, id, todos, todo, setTodos, theme }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((item) => {
      if(item.id !== todo.id){
        return item;
      }
    }))
  }

  const checkHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, status: !item.status
        }
      }
      return item;
    }))
  }

  return (
    <ul className={`todo ${!theme && 'todo-dark'} ${!theme && 'todo-dark'}`}>
      <input type="checkbox" id={id} value={text} className={`input-checkbox ${!theme && 'input-checkbox-dark'}`} onChange={checkHandler} />
      <label className={`label-container ${todo.status && 'label-filter'}`} htmlFor={id}>{text}</label>
      <svg onClick={deleteHandler} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </ul>
  );
};

export default Todo;
