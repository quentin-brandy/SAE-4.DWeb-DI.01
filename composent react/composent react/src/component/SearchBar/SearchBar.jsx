import SearchBarCard from './SearchBarCard.jsx'
export default function SearchBar (){

    return(
        <>
<section class=" px-5 md:px-10 xl:px-24">
    <h2 class="text-lg text-textwhite mb-4 md:text-xl">Trending</h2>
    <div class="grid grid-cols-12 gap-2 ">
    <SearchBarCard />
    <SearchBarCard />
    <SearchBarCard />
    <SearchBarCard />
    <SearchBarCard />
    <SearchBarCard />
    <SearchBarCard />
    </div>
  </section>
  </>
    )
    
}
