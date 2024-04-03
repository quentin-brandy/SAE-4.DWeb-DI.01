import SearchBarCard from "../Card/SearchBarCard.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMoviebySearch } from "../../libs/loaders.js";

export default function SearchBar(data) {
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

  return (
    <>
      <div className="mb-4 flex items-center justify-start border-b-2 border-textgrey px-5 py-10 md:px-10 xl:px-24">
        <input
          onChange={inputHandler}
          className="w-full border-none bg-transparent text-3xl text-textwhite focus:outline-none md:text-4xl"
          placeholder="Search"
          type="text"
        />
        <Link to="/">
          <img
            className=" w-10 cursor-pointer "
            src="/img//burgerclose.svg"
            alt=""
          ></img>
        </Link>
      </div>

      <section className=" px-5 md:px-10 xl:px-24">
        <h2 className="mb-4 text-lg text-textwhite md:text-xl">
          Tous les films
        </h2>
        <div className="grid grid-cols-12 gap-4 ">
          {inputMovie.map((item, index) => (
            <a
              key={index}
              className=" col-span-6 mb-0 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2"
            >
              <SearchBarCard {...item} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
