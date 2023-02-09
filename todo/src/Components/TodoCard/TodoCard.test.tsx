import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Todo } from "../../Models/Todo"
import { store } from "../../Redux/Store";
import { TodoCard } from "./TodoCard";


describe('Todo Card Test Suite', () => {


    // We want to test and see if passing our props to the component allows them to render successfully

    const toDoStub: Todo ={
        id: 19,
        title: 'Wash Car',
        description: 'Go outside and wash the car',
        finished: false
    };

    // Describe our individual tests
    it(' should display the title and description passed in as props', ()=>{

        // Render the component
        render(<Provider store={store}>
            <TodoCard id={toDoStub.id} title={toDoStub.title} description={toDoStub.description} finished={toDoStub.finished}/>
        </Provider>)


        // Test the result

        // Check that the title rendered correctly
        expect(screen.getByText('Wash Car')).toBeInTheDocument();

        // Check that the description rendered successfully
        expect(screen.getByText('Go outside and wash the car')).toBeInTheDocument();
    })


})