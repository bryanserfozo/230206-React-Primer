import reducer from './TodoSlice'

test('Test addTodo Reducer', () => {
    // First thing is to define a state variable
    let state;
    // Set the state variable with the reducer
    state = reducer({ todos: [] }, { type: 'todo/addTodo', payload: { id: 496, title: 'Test', description: 'Testing addTodo', finished: false } })
    // Check that our expectations match the state
    expect(state).toEqual({ todos: [{ id: 496, title: 'Test', description: 'Testing addTodo', finished: false }] });
});

test('Test updateTodo Reducer single value', () => {
    let state;
    state = reducer({ todos: [{ id: 496, title: 'Test', description: 'Testing addTodo', finished: false }] }, { type: 'todo/updateTodo', payload: 496 });
    expect(state).toEqual({ todos: [{ id: 496, title: 'Test', description: 'Testing addTodo', finished: true }] })
})

test('Test updateTodo Reducer multiple values', () => {
    let state;
    state = reducer({
        todos: [{ id: 496, title: 'Test', description: 'Testing addTodo', finished: false },
        { id: 497, title: 'Test', description: 'Testing addTodo', finished: false },
        { id: 498, title: 'Test', description: 'Testing addTodo', finished: false },
        { id: 499, title: 'Test', description: 'Testing addTodo', finished: false }
        ]
    }, { type: 'todo/updateTodo', payload: 496 });
    expect(state).toEqual({
        todos: [{ id: 496, title: 'Test', description: 'Testing addTodo', finished: true },
        { id: 497, title: 'Test', description: 'Testing addTodo', finished: false },
        { id: 498, title: 'Test', description: 'Testing addTodo', finished: false },
        { id: 499, title: 'Test', description: 'Testing addTodo', finished: false }
        ]
    })
})

test('Testing our removeTodo Reducer', () => {
    let state;
    state = reducer({todos:[{id:478,title:'Test',description:'Test 3',finished:false}]}, {type:'todo/removeTodo',payload:478});
    expect(state).toEqual({todos:[]});
  });