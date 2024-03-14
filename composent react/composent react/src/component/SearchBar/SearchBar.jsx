import SearchBarCard from '../Card/SearchBarCard.jsx'
import Close from '../../assets/burgerclose.svg'
import { Link } from 'react-router-dom'
export default function SearchBar (){
 
    return(
        <>
        <div class="flex justify-start items-center  border-b-2 border-textgrey mb-4  px-6 py-10 xl:px-14">
    <input class="w-full text-3xl bg-transparent text-textwhite border-none md:text-4xl" placeholder="Search" type="text" />
      <Link to="/">
    <img class=" w-10 cursor-pointer " src={Close} alt=""></img>
    </Link>
</div>

<section class=" px-5 md:px-10 xl:px-24">
    <h2 class="text-lg text-textwhite mb-4 md:text-xl">Trending</h2>
    <div class="grid grid-cols-12 gap-2 ">
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
   
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>

    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
    <SearchBarCard />
    </a>
    
    </div>
  </section>
  </>
    )
    
}
