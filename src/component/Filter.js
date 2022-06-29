import { useEffect, useState } from "react";

const Filter = ({ todos, filter, setFilter, setTodos, theme }) => {

const [itemLeft, setItemLeft] = useState(0);

const countList  = () => {
    let listnumber = todos.filter((item) => {
        if(item.status === false){
            return item;
        }
    })
    return listnumber.length;
}

useEffect(() => {
    setItemLeft(countList);
},[todos])


const filterHandler = (e) => {
  setFilter(e.target.value);
}

const deleteCompleteHandler = () => {
  setTodos(todos.filter((item) => {
    if (item.status !== true){
      return item;
    }
  }))
}


  return (
    <div className={`filter-bar ${!theme && 'filter-bar-dark'}`}>
      <p>{itemLeft} items left</p>
      <div>
        <input type="radio" value="all" name="filter" id="filter-all" onClick={filterHandler} defaultChecked></input>
        <label htmlFor="filter-all">All</label>
        <input type="radio" value="active" name="filter" id="filter-active" onClick={filterHandler}></input>
        <label htmlFor="filter-active">Active</label>
        <input type="radio" value="completed" name="filter" id="filter-completed" onClick={filterHandler}></input>
        <label htmlFor="filter-completed">Completed</label>
      </div>
      <p onClick={deleteCompleteHandler}>Clear Complete</p>
    </div>
  );
};

export default Filter;
