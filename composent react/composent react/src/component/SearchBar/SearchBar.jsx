import SearchBarCard from '../Card/SearchBarCard.jsx'
export default function SearchBar (){

    return(
        <>
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
