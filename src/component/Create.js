const Create = ({ setInputText, inputText, todos, setTodos, theme }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos([
        ...todos,
        { status: false, text: e.target.value, id: Date.now() },
      ]);
      setInputText("");
    }
  };

  return (
    <div>
      <form action="" className={`input-todo ${!theme && 'input-todo-dark'}`}>
        <input id="input-circle" type="radio"/>
        <label className="input-label" htmlFor="input-circle">
        <input
          type="text"
          className={`input-text ${!theme && "dark-background"}`}
          onChange={inputHandler}
          onKeyDown={inputSubmit}
          value={inputText}
          placeholder="Create a new todo..."
        />
        </label>
        <span></span>
      </form>
    </div>
  );
};

export default Create;
