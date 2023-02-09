import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './Models/Todo';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import TodoCard from './Components/TodoCard/TodoCard';

function App() {

  const [state, setState] = useState<Todo[]>([]);

  const create = (todo: Todo) => {
    setState([...state, todo]);
  }

  // We need methods for updating and removing a todo from the state
  const update = (id:number) => {
    console.log('Updating a todo');

    state.filter((todo:Todo) =>{
      if (todo.id === id){
        todo.finished = !todo.finished;
        setState([...state])
      }
    })
  }

  const remove = (id:number) => {
    console.log('removing a todo')

    setState(state.filter((todo: Todo) => todo.id !== id));
  }



  return (
    <div className="App">
      <CreateTodo addTodo={create}/>
      {
        state.map((todo) =>{
          return <TodoCard todo={todo} updateTodo={update} removeTodo={remove}/>
        })
      }
    </div>
  );
}

export default App;
