import Category from "../component/Category/Category";
import NavBar from "../component/NavBar/NavBar";
import { GetShowMovies , GetCategory } from "../libs/loaders";
import { useLoaderData , defer } from "react-router-dom";

export async function loader(){
  let moviesData =  await GetShowMovies();
  let Category = await GetCategory();
  return defer({movies:moviesData , category:Category});
}

export default function Show() {
  const data = useLoaderData()
  return (
    <>
    <NavBar/>
    <Category {...data}/>
    </>
  );
}
