import SerieBanner from "../component/Serie/SerieBanner";
import NavBar from "../component/NavBar/NavBarabsolute";
import SerieDescription from "../component/Serie/SerieDescritpion";
import { useNavigate, useLoaderData } from "react-router-dom";
import { GetMovie, GetrelatedMovies, Updatehistory } from "../libs/loaders";
import Sliders from "../component/Slider/Slider";

export async function loader({ params }) {
  let moviesData = await GetMovie(params.Moviename);
  await Updatehistory(params.Moviename);
  const relatedMoviesPromises = moviesData.category.map(async (item) => {
    return GetrelatedMovies(item.id);
  });
  const relatedMovies = await Promise.all(relatedMoviesPromises);
  const allRelatedMovies = relatedMovies.flat();

  const uniqueRelatedMovies = [];
  const seenNames = new Set();
  allRelatedMovies.forEach((movie) => {
    if (!seenNames.has(movie.name)) {
      uniqueRelatedMovies.push(movie);
      seenNames.add(movie.name);
    }
  });

  return { relatedmovies: uniqueRelatedMovies, movie: moviesData };
}
export default function Serie() {
  const data = useLoaderData();

  return (
    <>
      <NavBar />
      <SerieBanner {...data.movie} />
      <h2 className="mb-2 mt-10 px-5 text-lg text-white md:px-10 md:text-xl xl:px-24">
        Related Show
      </h2>
      <Sliders {...data.relatedmovies} />
      <SerieDescription {...data.movie} />
    </>
  );
}
