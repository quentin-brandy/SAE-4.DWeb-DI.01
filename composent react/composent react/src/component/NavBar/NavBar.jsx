
import logo from '../../assets/cbslogo.svg';
import burgerclose from '../../assets/burgerclose.svg';
import burgeropen from '../../assets/burgeropen.svg';
import search from '../../assets/search.svg';

export default function Footer() {
    function Openmenu() {
        document.getElementById('mobile').style.transform = 'translateX(0%)';
      }
      
      function Closemenu() {
          document.getElementById('mobile').style.transform = 'translateX(100%)';
      }
    return (
        <header className="bg-background">
    <nav className="flex md:w-screen md:items-center md:gap-9 px-5 md:px-10 xl:px-24 ">
        <div className=" flex gap-2">
            <img onClick={Openmenu} className=" w-6 md:hidden" src={burgeropen} alt=""/>
            <img className='w-20 pb-6' src={logo} alt=""/>
        </div>

        <div className=" bg-black md:bg-background md:flex md:items-center md:justify-between md:relative md:w-full md:h-fit">
            <ul className="hidden md:flex items-center  gap-5">
                <li>
                    <a className="flex items-center justify-center gap-4  pb-6" href="#">
                        <h3 className="text-sm font-normal text-textwhite">SHOWS</h3>
                    </a>
                </li>
                <li>
                    <a className="flex items-center justify-center gap-4 pb-6 " href="#">
                        <img className=" w-7 h-7" onClick={Closemenu} src={search} alt=""/>
                    </a>
                </li>
              
            </ul>
                <ul className="hidden md:flex gap-6 mr-10 items-center">  
                    <li className="">
                    <a className="flex items-center justify-center gap-4  pb-6" href="">
                    <h3 className="text-xs font-normal text-textwhite">SING IN</h3>
                </a>
                </li>
                <li className="">
                    <a className="flex items-center justify-center gap-4  pb-6" href="">
                    <h3 className="text-xs font-figtree font-normal text-textwhite bg-button py-4 px-6">TRY PARAMOUNT +</h3>
                </a>
                </li>
            </ul>
        </div>

  {/* <!-- mobile --> */}
<div id="mobile" className="absolute z-10 translate-x-full w-full h-full bg-black md:hidden md:bg-background md:items-center md:justify-between md:relative md:w-full md:h-fit">
    <ul className="md:hidden ">
        <li className="">
            <img onClick={Closemenu}  className="bg-black cursor-pointer" src={burgerclose} alt=""/>
        </li>
        <li className="">
            <a className="flex items-center justify-center gap-4 py-4 bg-background hover:bg-textwhite " href="">
            <h3 className="text-xl">Search shows</h3>
            <img className=" w-10 h-10" src={search} alt=""/>
        </a>
        </li>
        <li className="bg-black">
            <a className="flex items-center justify-center gap-4 py-6 bg-black border-2 mx-2 hover:bg-textwhite " href="">
            <h3 className="text-xs font-normal text-textwhite hover:text-black">SIGN UP</h3>
        </a>
        </li>
        <li>
            <a className="flex items-center justify-center gap-4 pt-4 pb-6" href="">
            <h3 className="text-xs font-normal text-textwhite">SING IN</h3>
        </a>
        </li>
        <li className="flex justify-center m-auto w-11/12 bg-background min-h-[0.5px]"></li>
        <li >
            <a className="flex items-center justify-center gap-4 pt-4 pb-6" href="">
            <h3 className="text-xs font-normal text-textwhite">SHOWS</h3>
        </a>
        </li>
    </ul>
</div>
    </nav>
   </header>
 
    );
}