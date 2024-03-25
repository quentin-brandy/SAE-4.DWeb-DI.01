import SearchBar from "../component/SearchBar/SearchBar";
import { useLoaderData } from "react-router-dom";
import { GetSearchMovies } from "../libs/loaders";

export async function loader(){
  let moviesData =  await GetSearchMovies();
  return moviesData;
}

export default function Search(){
  const data = useLoaderData();
    return(
      <>
      <SearchBar {...data}/>  
      </>
    )
}