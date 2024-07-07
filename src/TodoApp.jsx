import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
    const [todoId, setTodoid]= useState(1);
    //const { data: todos=[], isLoading} = useGetTodosQuery();
    const {data: todo, isLoading} = useGetTodoQuery(todoId);
    const nextTodo = () =>{
        setTodoid(prevState => prevState + 1);
    }
    const prevTodo = ()=>{
        if(todoId <= 1) return; // if todoId is 1, don't decrement
        setTodoid(prevState => prevState - 1);
    }
  return (
    <>
    <h1>Todos - RTK Query</h1>
    <hr />
    <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

    <pre>{JSON.stringify(todo)}</pre>
   
    <button 
    disabled= {todoId == 1}
    onClick={prevTodo}>
        Pervious todo
    </button>
    <button onClick={nextTodo}>
        Next Todo
    </button>

     {/* <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                <strong>{todo.completed ? 'Done ' : 'Pending '}</strong>
                { todo.title }
            </li>
        ))}
    </ul> */}
    </>
  )
}
