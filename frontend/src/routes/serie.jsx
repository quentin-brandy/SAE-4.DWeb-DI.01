import SerieBanner from "../component/Serie/SerieBanner";
import NavBar from "../component/NavBar/NavBarabsolute";
import SerieDescription from "../component/Serie/SerieDescritpion";
import { useLoaderData} from "react-router-dom";
import { GetMovie, GetrelatedMovies} from "../libs/loaders";
import Sliders from "../component/Slider/Slider";

export async function loader({params}){
    let moviesData =  await GetMovie(params.Moviename);
    const relatedMoviesPromises = moviesData.category.map(async (item) => {
      return GetrelatedMovies(item.id);
  });  
  const relatedMovies = await Promise.all(relatedMoviesPromises);
  const allRelatedMovies = relatedMovies.flat();


  const uniqueRelatedMovies = [];
  const seenNames = new Set();
  allRelatedMovies.forEach(movie => {
      if (!seenNames.has(movie.name)) {
          uniqueRelatedMovies.push(movie);
          seenNames.add(movie.name);
      }
  });

  return { relatedmovies: uniqueRelatedMovies, movie: moviesData };
}
export default function Serie(){
const data =  useLoaderData();

    return(
    <>
    <NavBar/>
    <SerieBanner {...data.movie}/>
    <h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg mb-2 md:text-xl text-white">Related Show</h2>
    <Sliders {...data.relatedmovies} />
    <SerieDescription {...data.movie}/>

    </>
    )
}