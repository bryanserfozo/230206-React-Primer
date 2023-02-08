import CreateTodo from "../CreateTodo/CreateTodo";
import {TodoCard} from "../TodoCard/TodoCard";
import { useSelector} from 'react-redux'
import { RootState } from "../../Redux/Store";
import { useEffect } from "react";
import { Todo } from "../../Models/Todo";


function TodoContainer(){

    // Get the current state of the todo list from the store
    // Do this using the useSelector hook
    const state = useSelector((state:RootState) => state);

    useEffect(() => {
        console.log("State has changed", state)
    }, [state])

    return (
        <div>
            <CreateTodo />
            {
                state.todo.todos.map((todo:Todo) =>{
                    return <TodoCard key={todo.id} id={todo.id} description={todo.description} title={todo.title} finished={todo.finished} />
                })
            }
            
        </div>
    )
}

export default TodoContainer;