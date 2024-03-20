import Button from '../Button/Button';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function Openmenu() {
      setIsMenuOpen(true);
      document.getElementById('header').classList.add('h-screen'); // Ajoute la classe pour que le header prenne 100vh
      document.getElementById('mobile').style.transform = 'translateX(0%)';
    }
    
    function Closemenu() {
      setIsMenuOpen(false);
      document.getElementById('header').classList.remove('h-screen'); // Supprime la classe pour que le header reprenne sa taille normale
      document.getElementById('mobile').style.transform = 'translateX(100%)';
    }

    return (
        <header id='header' className={` bg-transparent absolute z-40 overflow-x-hidden ${isMenuOpen ? 'h-screen' : ''}`}>
            {/* mobile */}
            <div id="mobile" className="absolute z-50  translate-x-full pr-10 w-screen h-[200rem] bg-black md:hidden">
    <ul className=" flex flex-col">
        <li className="pl-10 mb-5">
            <img onClick={Closemenu}  className=" px-0 w-8 cursor-pointer" src='/img/burgerclose.svg' alt=""/>
        </li>
        <li className='w-screen'>
            <Link className="flex items-center justify-center gap-4 py-4 mb-3 bg-background hover:bg-textwhite" to="/search">
            <h3 className="text-xl text-textgrey">Search shows</h3>
            <img className="w-6 h-6 text-textgrey" src='/img/search.svg' alt=""/>
        </Link>
        </li>
        <li className="bg-black pl-10">
            <a className="flex items-center justify-center gap-4 py-6 bg-black border-2 px-2 hover:bg-textwhite" href="">
            <h3 className="text-xs font-normal text-textwhite hover:text-black">SIGN UP</h3>
        </a>
        </li>
        <li className='pl-10'>
            <a className="flex items-center justify-center gap-4 pt-4 pb-6" href="">
            <h3 className="text-xs font-normal text-textwhite">SING IN</h3>
        </a>
        </li>
        <li className="flex justify-center pl-10 m-auto w-11/12 bg-background min-h-[0.5px]"></li>
        <li className='pl-10'>
        <Link className="flex items-center justify-center gap-4 pt-4 pb-6" to="/show">
            <h3 className="text-xs font-normal text-textwhite">SHOWS</h3>
        </Link>
        </li>
    </ul>
</div>
    <nav className="flex w-screen py-2  mb-4 md:items-center md:gap-9 px-5 md:px-10 xl:px-24 bg-transparent">
        <div className=" flex items-start">
            <img onClick={Openmenu} className=" pb-6 w-6 md:hidden" src='/img/burgeropen.svg' alt=""/>
            <img className='cursor-pointer scale-75  md:w-24 ' src='/img/cbslogo.svg' alt=""/>
        </div>
        {/* mobile */}
        <div className='flex justify-end w-full h-8 px-5 md:px-5 md:hidden'>
        <Button className="font-semibold"> TRY PARAMOUNT+</Button>
        </div>
        <div className=" bg-black md:bg-transparent md:flex md:items-center md:justify-between md:relative md:w-full md:h-fit">
            <ul className="hidden  md:flex items-center gap-5">
                <li>
                <Link className="flex items-center justify-center gap-4 pt-4 pb-6" to="/show">
            <h3 className="text-xs font-normal text-textwhite">SHOWS</h3>
        </Link>
                </li>
                <li>
                    <Link className="flex items-center justify-center gap-4 "to="/search" > <img className=" w-7 h-7" src='/img/search.svg'  alt=""/>
                    </Link>
                </li>
              
            </ul>
                <ul className="hidden md:flex gap-6 mr-10 items-center">  
                    <li className="">
                    <a className="flex items-center justify-center gap-4" href="">
                    <h3 className="text-xs font-normal text-textwhite">SING IN</h3>
                </a>
                </li>
                <li className="flex items-center justify-center gap-4  ">     
                <Button className=" font-semibold"> TRY PARAMOUNT+</Button>
                </li>
            </ul>
        </div>
    </nav>
   </header>
 
    );
}