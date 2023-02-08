import CreateTodo from "../CreateTodo/CreateTodo";
import TodoCard from "../TodoCard/TodoCard";

function TodoContainer(){
    return (
        <div>
            <CreateTodo />
            <TodoCard />
        </div>
    )
}

export default TodoContainer;