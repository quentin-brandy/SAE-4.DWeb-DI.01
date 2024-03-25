import SearchBarCard from '../Card/SearchBarCard.jsx'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react';
import { GetMoviebySearch } from '../../libs/loaders.js';


export default function SearchBar (data){
  const [inputText, setInputText] = useState("");
  const [inputMovie, setInputMovie] = useState([]);

  useEffect(() => {
    setInputMovie(Object.values(data));
  }, [data]);

  const inputHandler = async (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    const searchData = await GetMoviebySearch(lowerCase);
    setInputMovie(Object.values(searchData));
  };
  
    return(
        <>
        <div className="flex justify-start items-center border-b-2 border-textgrey mb-4 py-10 px-5 md:px-10 xl:px-24">
    <input  onChange={inputHandler} className="w-full text-3xl bg-transparent text-textwhite border-none md:text-4xl" placeholder="Search" type="text" />
      <Link to="/">
    <img className=" w-10 cursor-pointer " src='/img//burgerclose.svg' alt=""></img>
    </Link>
</div>

<section className=" px-5 md:px-10 xl:px-24">
    <h2 className="text-lg text-textwhite mb-4 md:text-xl">Tous les films</h2>
    <div className="grid grid-cols-12 gap-4 ">
    {inputMovie.map((item, index) => (
           <a key={index} className=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
           <SearchBarCard img={item.horizontal_url} {...item}/>
           </a>
 
          ))}  
    </div>
  </section>
  </>
    )
    
}
