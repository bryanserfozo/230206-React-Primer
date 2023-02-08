import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../../Models/Todo";
import { removeTodo, updateTodo } from "../../Redux/Slices/TodoSlice";
import { DispatchType } from "../../Redux/Store";
import './TodoCard.css'

export const TodoCard:React.FC<Todo> = ({id, title, description, finished}) =>{

    const dispatch:DispatchType = useDispatch();

    const [style, setStyle] =useState<string>('imcomplete');

    const update = () => {
        // Update the state of the card to finished/not finished
        dispatch(updateTodo(id));
    }

    const remove = () =>{
        // We need to call the dispatcher and create a removal function
        dispatch(removeTodo(id))
    }


    useEffect(() =>{
        finished ? setStyle('complete') : setStyle('incomplete')
    }, [finished])


    return (
        <div className="todo-card">
            <h2 className={style}>{title}</h2>
            <p className={style}>{description}</p>
            <button onClick={update}>Check Complete</button>
            <button onClick={remove}>Remove Todo</button>
        </div>
    )
}

