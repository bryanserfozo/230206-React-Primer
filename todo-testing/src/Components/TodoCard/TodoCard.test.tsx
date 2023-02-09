import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import TodoCard from "./TodoCard"

// Let's describe our test suite
describe(' Mocking Functions with Jest', ()=>{

    // Let's create a basic todo to pass to this todo card
    const todo = {
        id: 1,
        title: "Test",
        description: "Description",
        finished: false
    }

    // Now we have to construct the function we want to mock with jest
    const update = jest.fn(() => console.log("update method was called"));
    const remove = jest.fn(() => console.log("remove method was called"))

    // Checking for user events/interactions with the page

    it("should call the update function when the check complete button is pressed", ()=>{
        render(<TodoCard todo={todo} updateTodo={update} removeTodo={remove}/>)

        // Simulate the clicking event
        userEvent.click(screen.getByText("Check Complete"));

        // We need to verify that the event called the update method
        expect(update).toBeCalledTimes(1);
    })

    it(" should call the remove function when remove is clicked", ()=>{
        render(<TodoCard todo={todo} updateTodo={update} removeTodo={remove}/>)

        // Simulate the clicking event
        userEvent.click(screen.getByText("Remove Todo"));

        // We need to verify that the event called the update method
        expect(remove).toBeCalledTimes(1);
    })
})