import { IUser } from "../../models/user";

interface IDashboardProps {
    currentUser: IUser | undefined
}


function Dashboard(props: IDashboardProps) {
    return (
        <>
            <p> Welcome Back {props.currentUser?.username}</p>
            <p> Id: {props.currentUser?.id}</p>
            <p> Role: {props.currentUser?.role}</p>
        </>

    )
}

export default Dashboard;