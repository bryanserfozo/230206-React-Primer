import { Todo } from "../../Models/Todo"

interface TodoCardProps{
    todo: Todo,
    updateTodo(id:number):void,
    removeTodo(id:number):void
}


function TodoCard(props: TodoCardProps) {

    const update = () =>{
        props.updateTodo(props.todo.id);
    }

    const remove = () =>{
        props.removeTodo(props.todo.id)
    }

    return (
        < div className="todo-card" >
            <h2>{props.todo.title}</h2>
            <p>{props.todo.description}</p>
            <button onClick={update}>Check Complete</button>
            <button onClick={remove}>Remove Todo</button>
        </div >

    )
}

export default TodoCard