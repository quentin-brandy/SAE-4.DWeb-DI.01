import NavBarlog from "../component/NavBar/NavBarlog";
import { Outlet } from "react-router-dom";
import FooterLog from "../component/Footer/FooterLog";

export default function Login() {
  return (
    <>
      <NavBarlog />
      <Outlet />
      <FooterLog />
    </>
  );
}
