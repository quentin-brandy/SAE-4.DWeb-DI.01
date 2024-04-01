import { NavLink } from "react-router-dom"
import { useState } from "react";

export default function NavBarlog() {
    const [isSignIn, setIsSignIn] = useState(true);


    const handleNavLinkClick = () => {
        setIsSignIn(!isSignIn); 
      };

    return (
      <nav className="flex w-full justify-between px-5 py-4 bg-black">
        <img className="text-textgrey" src='/img/cbslogo.svg' alt=""/>
        {isSignIn ? (
          <NavLink to="signup" onClick={handleNavLinkClick} className="text-textwhite text-sm hover:text-gray-500 cursor-pointer">SIGN UP</NavLink>
        ) : (
          <NavLink to="signin" onClick={handleNavLinkClick} className="text-textwhite text-sm hover:text-gray-500 cursor-pointer">SIGN IN</NavLink>
        )}
      </nav>
    );
  }