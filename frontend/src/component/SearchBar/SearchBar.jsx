import SearchBarCard from '../Card/SearchBarCard.jsx'
import { Link } from 'react-router-dom'
export default function SearchBar (){
 
    return(
        <>
        <div className="flex justify-start items-center border-b-2 border-textgrey mb-4 py-10 px-5 md:px-10 xl:px-24">
    <input className="w-full text-3xl bg-transparent text-textwhite border-none md:text-4xl" placeholder="Search" type="text" />
      <Link to="/home">
    <img className=" w-10 cursor-pointer " src='/img//burgerclose.svg' alt=""></img>
    </Link>
</div>

<section className=" px-5 md:px-10 xl:px-24">
    <h2 className="text-lg text-textwhite mb-4 md:text-xl">Trending</h2>
    <div className="grid grid-cols-12 gap-2 ">
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
   
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>

    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    
    </div>
  </section>
  </>
    )
    
}
