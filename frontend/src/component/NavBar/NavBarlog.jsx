import { Link } from "react-router-dom"
export default function NavBarlog(){

    return(
    <nav className=" flex w-full justify-between px-5 py-4 bg-black">
     <img className=" text-textgrey" src='/img/cbslogo.svg' alt=""/>
     <Link className="text-textwhite text-sm hover:text-gray-500 cursor-pointer">SIGN IN</Link>
    </nav>
  
    )
}