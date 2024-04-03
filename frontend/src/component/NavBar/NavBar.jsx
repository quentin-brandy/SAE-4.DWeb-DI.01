import Button from "../Button/Button";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLog, setIsLog] = useState(false);

  let token = cookieStore.get("token connexion").then((token) => {
    if (token) {
      console.log(token);
      setIsLog(true);
    } else {
      console.log(token);
      setIsLog(false);
    }
  });

  function Openmenu() {
    setIsMenuOpen(true);
    document.getElementById("header").classList.add("h-screen"); // Ajoute la classe pour que le header prenne 100vh
    document.getElementById("mobile").style.transform = "translateX(0%)";
  }

  function Closemenu() {
    setIsMenuOpen(false);
    document.getElementById("header").classList.remove("h-screen"); // Supprime la classe pour que le header reprenne sa taille normale
    document.getElementById("mobile").style.transform = "translateX(100%)";
  }

  return (
    <header
      id="header"
      className={` z-40 overflow-hidden bg-transparent ${isMenuOpen ? "h-screen" : ""}`}
    >
      {/* mobile */}
      <div
        id="mobile"
        className="absolute z-50 h-[200rem] w-screen translate-x-full bg-background px-0 pr-10 md:hidden"
      >
        <ul className=" flex flex-col bg-background">
          <li className="">
            <img
              onClick={Closemenu}
              className="cursor-pointer bg-black"
              src="/img/burgerclose.svg"
              alt=""
            />
          </li>
          <li className="flex items-center justify-center gap-4 bg-background py-4 hover:bg-textwhite">
            <NavLink to="/search">
              <h3 className="text-xl">Search shows</h3>
              <img className=" h-10 w-10" src="/img/search.svg" alt="" />
            </NavLink>
          </li>
          <li className="bg-black">
            {isLog ? (
              <NavLink
                to="/account"
                className="flex w-full justify-center py-4 text-xs text-textwhite"
              >
                PROFILE
              </NavLink>
            ) : (
              <NavLink
                to="/account/signin"
                className="flex items-center justify-center gap-4 pb-6 pt-4"
              >
                <h3 className="text-xs  text-textwhite">SING IN</h3>
              </NavLink>
            )}
          </li>
          <li className="m-auto flex min-h-[0.5px] w-11/12 justify-center bg-background"></li>
          <li>
            <NavLink
              className="flex items-center justify-center gap-4 pb-6 pt-4"
              to="/show"
            >
              <h3 className="text-xs  text-textwhite">SHOWS</h3>
            </NavLink>
          </li>
        </ul>
      </div>
      <nav className="mb-4 flex w-screen  bg-transparent px-5 py-2 md:items-center md:gap-9 md:px-10 xl:px-24">
        <div className=" flex items-start">
          <img
            onClick={Openmenu}
            className=" w-6 pb-6 md:hidden"
            src="/img/burgeropen.svg"
            alt=""
          />
          <NavLink to="/">
            <img
              className="scale-75 cursor-pointer  md:w-24 "
              src="/img/cbslogo.svg"
              alt=""
            />
          </NavLink>
        </div>
        {/* mobile */}
        <div className="flex h-8 w-full justify-end px-5 md:hidden md:px-5">
          <Button className="font-semibold"> TRY PARAMOUNT+</Button>
        </div>
        <div className=" bg-black md:relative md:flex md:h-fit md:w-full md:items-center md:justify-between md:bg-transparent">
          <ul className="hidden  items-center gap-5 md:flex">
            <li>
              <NavLink
                className="flex items-center justify-center gap-4 pb-6 pt-4"
                to="/show"
              >
                <h3 className="text-xs text-textwhite md:text-base">SHOWS</h3>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center justify-center gap-4 "
                to="/search"
              >
                {" "}
                <img className=" h-7 w-7" src="/img/search.svg" alt="" />
              </NavLink>
            </li>
          </ul>
          <ul className="mr-10 hidden items-center gap-6 md:flex">
            <li className="">
              {isLog ? (
                <NavLink
                  to="/account"
                  className="text-xs text-textwhite  md:text-lg"
                >
                  PROFILE
                </NavLink>
              ) : (
                <NavLink
                  to="/account/signin"
                  className="text-xs text-textwhite  md:text-lg"
                >
                  SIGN IN
                </NavLink>
              )}
            </li>
            <li className="flex items-center justify-center gap-4  ">
              <Button className="text-xl"> TRY PARAMOUNT+</Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
