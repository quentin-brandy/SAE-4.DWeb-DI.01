import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBarlog() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleNavLinkClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <nav className="flex w-full justify-between bg-black px-5 py-4">
      <NavLink to="/">
        <img className="cursor-pointer" src="/img/cbslogo.svg" alt="" />
      </NavLink>
      {isSignIn ? (
        <NavLink
          to="signup"
          onClick={handleNavLinkClick}
          className="cursor-pointer text-sm text-textwhite hover:text-gray-500"
        >
          SIGN UP
        </NavLink>
      ) : (
        <NavLink
          to="signin"
          onClick={handleNavLinkClick}
          className="cursor-pointer text-sm text-textwhite hover:text-gray-500"
        >
          SIGN IN
        </NavLink>
      )}
    </nav>
  );
}
