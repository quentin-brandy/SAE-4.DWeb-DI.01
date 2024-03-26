import MoviesCategories from "../component/MoviesCategory/MoviesCategory";
import { useLoaderData , defer } from "react-router-dom";
import { GetShowMovies } from "../libs/loaders";

export async function loader({params}){
  let MoviesData =  await GetShowMovies(params.Categoryname);
  return MoviesData;
}
export default function Category() {
    const data = useLoaderData()
    return(
<>
<MoviesCategories {...data}/>
</>
    )
}