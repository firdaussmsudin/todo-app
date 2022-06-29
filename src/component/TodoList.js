import { useEffect, useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const TodoList = ({todos, inputText, setTodos, theme}) => {

    const [filter, setFilter] = useState("all");
    const [todosFilter, setTodosFilter] = useState([]);

const updateFilter = () => {
    switch(filter){
        case "active":
            setTodosFilter(todos.filter((item) => {
                if (item.status === false){
                    return item;
                }
            }))
            console.log("active");
        break;
        case "completed":
            setTodosFilter(todos.filter((item) => {
                if (item.status === true){
                    return item;
                }
            }))
            console.log("completed");
        break;
        case "all":
            setTodosFilter([...todos]);
            console.log(filter);
        break;
        default: 
        console.log("error");
    }
}

useEffect(() => {
    updateFilter()
},[filter, todos])
   


    return ( 
        <div className={`list-container ${!theme && 'list-container-dark'}`}>
           <ul className="todo-item">
            {todosFilter.map((item) => (
                <Todo text = {item.text} key = {item.id} todos={todos} id={item.id} todo={item} setTodos={setTodos} theme={theme}/>
            ))}
           </ul>
           <Filter todos={todos} setFilter={setFilter} setTodos={setTodos} theme={theme} />
           <Filter todos={todos} setFilter={setFilter} setTodos={setTodos} theme={theme} />
        </div>
    );
}
 
export default TodoList;