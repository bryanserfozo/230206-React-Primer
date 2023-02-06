console.log("Hello World");

const jsContainer = document.getElementById("mountNode");
const reactContainer = document.getElementById("mountNode2");
// Create a starting point for our react app
const root = ReactDOM.createRoot(reactContainer);

function Demo(props) {
    return (
        <div className="demo">
            Hello {props.name}
            <input />
            <p>{new Date().toString()}</p>
        </div>
    );
}



const update = () => {
    jsContainer.innerHTML = `
<div class="demo">
    Hello JS
    <input />
    <p> ${new Date()} </p>
</div>
`;

    // root.render(
    //     React.createElement(
    //         "div",
    //         {className : 'demo'},
    //         "Hello React",
    //         React.createElement("input"),
    //         React.createElement(
    //             "p",
    //             null,
    //             new Date().toString()
    //         )
    //     )
    // );

    // root.render(
    //     <div className="demo">
    //         Hello React
    //         <input />
    //         <p>{new Date().toString()}</p>
    //     </div>
    // );

    root.render(
        // Equivalent to <> </>
        <React.Fragment>
            <Demo name='Bryan'/>
            <Demo name='Kevin'/>
            <Demo name='Ethan'/>
        </ React.Fragment>

    )
}

setInterval(update, 1000);