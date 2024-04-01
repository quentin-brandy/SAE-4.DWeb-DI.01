import NavBarlog from "../NavBar/NavBarlog";
import { Outlet } from "react-router-dom";
import FooterLog from "../Footer/FooterLog";
let isSignIn= true;
export default function Login(){
    return(
        <>
        <NavBarlog isSignIn={isSignIn}/>
        <Outlet/>
        <FooterLog/>
        </>
    )
}