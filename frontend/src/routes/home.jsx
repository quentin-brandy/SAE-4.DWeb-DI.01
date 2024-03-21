import Footer from "../component/Footer/Footer";
import NavBarAbsolute from "../component/NavBar/NavBarabsolute";
import Sliders from "../component/Slider/Slider";
import App from "../component/Carroussel/Carroussel";
import Sliderlast from "../component/Slider/Sliderlast";
import { GetMovies } from "../libs/loaders";
import { useLoaderData } from 'react-router-dom';

export async function loader(){
  let pricingData = await GetMovies();
  return pricingData
}

export default function Home() {
  const data = useLoaderData()
  return (
    <>
    <NavBarAbsolute/>
<App {...data}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg md:text-xl text-white">Latest Trailer</h2>
<Sliderlast {...data}/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg md:text-xl text-white">Comedy</h2>
<Sliders/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg md:text-xl text-white">Drama</h2>
<Sliders/>
<h2 className="px-5 md:px-10 xl:px-24 mt-10 text-lg md:text-xl text-white">News</h2>
<Sliders/>
<Footer/>
    </>
  );
}
