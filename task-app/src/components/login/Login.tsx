import { SyntheticEvent, useState } from "react";
import { IUser } from "../../models/user";
import { Navigate } from 'react-router-dom'


// Define a shape for the props we'd like to receive from the app component
interface ILoginProps{
    currentUser: IUser | undefined,
    setCurrentUser: (nextUser: IUser) => void
}

function Login(props: ILoginProps) {

    // let username = '';
    // let password = '';
    // let errorMessage = '';

    // Destructing Assignment
    // Destructing assignment set username = first element of useState and setUsername = second element
    const [username, setUsername] = useState(''); // initial value
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [currentUser, setCurrentUser] = useState("");

    

    let updateUsername = (e: SyntheticEvent) => {
        // username = ((e.target as HTMLInputElement).value);
        setUsername((e.target as HTMLInputElement).value);
        console.log(`Username is ${username}`);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
        console.log(`Password is ${password}`);
    }

    let login = async (e: SyntheticEvent) => {
        console.log(`Username is ${username} and password is ${password}`);
        if (!username || !password) {
            setErrorMessage('You must have valid username and password');

        } else {
            setErrorMessage('');
            try{
                let response = await fetch("http://localhost:8080/auth", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/JSON'
                    },
                    credentials: "include",// Works with HTTP Session
                    body: JSON.stringify({ username, password })
                });
    
                if (response.status == 200){
                    // setCurrentUser(await response.json())
                    // console.log(await response.json());
                    // console.log(currentUser);
                    props.setCurrentUser( await response.json());
                } else{
                    setErrorMessage('Could Not Validate Credentials');
                }
            } catch (err){
                setErrorMessage('Could not communicate with API');
            }

            

        }

    }



    return (
        // Conditional Rendering
        // (condition) ? do if true : do if false
        props.currentUser?
        <Navigate to="/dashboard"/>
        :
        <>
            <h3>Log Into Task-App</h3>
            <div id="login-form">
                <input id="login-username" type='text' placeholder="Enter Username" onChange={updateUsername} />
                <br /> <br />
                <input id="login-password" type='password' placeholder="Enter Password" onChange={updatePassword} />
                <br /> <br />
                <button id="login-button" onClick={login}>Login</button>
            </div>
            <div>
                <p>{errorMessage}</p>
            </div>
        </>
    )
}

export default Login;