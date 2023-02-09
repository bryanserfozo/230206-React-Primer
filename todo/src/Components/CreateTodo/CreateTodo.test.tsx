import { screen,render  } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../Redux/Store";
import CreateTodo from "./CreateTodo";

// Set up a test suite to test our components
describe('Create To-do Test Suite',() =>{

    //Inside here will be all our tests
    // We want to test whether our CreateTodo Component renders correctly or not

    it('Should render our createToDo component', ()=>{
        // We need to do two things

        // We need to render the component
        render(<Provider store={store}><CreateTodo /> </Provider>);

        // We need to test what renders
        const testElement = screen.getByTestId('create-todo');
        expect(testElement).toBeInTheDocument();

        expect(screen.getByText("Todo Name")).toBeInTheDocument();
        // expect(screen.getByText("Todo Field")).not.toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByRole('button', {name:"Create Todo"}))
    })



})