import Footer from "../component/Footer/Footer";
import NavBarAbsolute from "../component/NavBar/NavBarabsolute";
import Sliders from "../component/Slider/Slider";
import App from "../component/Carroussel/Carroussel";
import Sliderlast from "../component/Slider/Sliderlast";
import { useLoaderData , defer } from "react-router-dom";
import { GetFilmalaUne, GetMovies } from "../libs/loaders";

export async function loader(){
  let moviesData =  await GetMovies();
  let AlaUnedata =  await GetFilmalaUne( );
  return defer({movies:moviesData , alaune:AlaUnedata});
}

export default function Home() {
  const data = useLoaderData()
  const animationData = Object.values(data.movies).filter(item => {
    return item.category.some(cat => cat.name === "Animation");
});
const romanceData = Object.values(data.movies).filter(item => {
  return item.category.some(cat => cat.name === "Fantasy");
});
  return (
    <>
    <NavBarAbsolute/>
<App {...data.alaune}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg mb-2 md:text-xl text-white">Latest Trailer</h2>
<Sliderlast {...data.movies}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg mb-2 md:text-xl text-white">Comedy</h2>
<Sliders {...animationData}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg mb-2 md:text-xl text-white">Drama</h2>
<Sliders  {...romanceData}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg mb-2 md:text-xl text-white">News</h2>
<Sliders/>
<Footer/>
    </>
  );
}
