import NavBarlog from "../NavBar/NavBarlog";
import SignUp from "../Form/SignUp";
import SignIn from "../Form/SignIn";
import { Outlet } from "react-router-dom";
let isSignIn= true;
export default function Login(){
    return(
        <>
        <NavBarlog isSignIn={isSignIn}/>
        <Outlet/>
        </>
    )
}