import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Todo } from '../../Models/Todo'

// We need some sort of initial state to describe our todo list at the beginning

interface TodoSliceState{
    todos: Todo[]
};

const initialState: TodoSliceState = {
    todos: []
}


// Create our slice and map our reducers
export const TodoSlice = createSlice({
    // We need to give our slice a name
    name:'todo',
    // We need to give it an initial state
    initialState,
    reducers:{
        addTodo: (state:TodoSliceState, action: PayloadAction<Todo>) =>{
            state.todos = [...state.todos, action.payload];
            return state;
        }
    }
});

export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer;