import { SyntheticEvent, useState } from 'react'
import { Todo } from '../../Models/Todo'
import { DispatchType } from '../../Redux/Store'
import { useDispatch} from 'react-redux'
import { addTodo } from '../../Redux/Slices/TodoSlice'

function CreateTodo() {

    const dispatch:DispatchType = useDispatch();

    const [newTodo, setNewTodo] = useState<Todo>({
        id: 0,
        title: '',
        description: '',
        finished: false
    })

    const handleChange = (e: SyntheticEvent) => {
        // console.log((e.target as HTMLInputElement).value)
        setNewTodo({
            ...newTodo,
            [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
        })
    }

    const submitTodo = () => {
        const todo: Todo = {
            id: Math.floor(Math.random()*1000) + 1,
            title: newTodo.title,
            description: newTodo.description,
            finished: false
        }

        // We need some way to send this to the store
        // console.log(todo);
        // Now that we have our reducers we can the dispatcher to update the state for us
        dispatch(addTodo(todo));
    }


    return (
        <div className="new-todo" data-testid="create-todo">
            <h1> Todo Name</h1>
            <input name='title' onChange={handleChange} />
            <h1> Description</h1>
            <input name='description' onChange={handleChange} />
            <button onClick={submitTodo}>Create Todo</button>
        </div>
    )
}

export default CreateTodo;