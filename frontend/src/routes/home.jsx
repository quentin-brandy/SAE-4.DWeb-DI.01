import NavBarAbsolute from "../component/NavBar/NavBarabsolute";
import Sliders from "../component/Slider/Slider";
import App from "../component/Carroussel/Carroussel";
import Sliderlast from "../component/Slider/Sliderlast";
import { useLoaderData, defer } from "react-router-dom";
import { GetFilmalaUne, GetMovies, GetUserMovies } from "../libs/loaders";

export async function loader() {
  let moviesData;
  let user = await cookieStore.get("token connexion");
  console.log(user);
  if (user == null) {
    moviesData = await GetMovies();
  } else {
    moviesData = await GetUserMovies(user.value);
  }

  let AlaUnedata = await GetFilmalaUne();
  return defer({ movies: moviesData, alaune: AlaUnedata });
}

export default function Home() {
  const data = useLoaderData();
  const animationData = Object.values(data.movies).filter((item) => {
    return item.category.some((cat) => cat.name === "Animation");
  });
  const romanceData = Object.values(data.movies).filter((item) => {
    return item.category.some((cat) => cat.name === "Fantasy");
  });
  return (
    <>
      <NavBarAbsolute />
      <App {...data.alaune} />
      <h2 className="mb-2 mt-10 px-5 text-lg text-white md:px-10 md:text-xl xl:px-24">
        Latest Trailer
      </h2>
      <Sliderlast {...data.movies} />
      <h2 className="mb-2 mt-10 px-5 text-lg text-white md:px-10 md:text-xl xl:px-24">
        Comedy
      </h2>
      <Sliders {...animationData} />
      <h2 className="mb-2 mt-10 px-5 text-lg text-white md:px-10 md:text-xl xl:px-24">
        Drama
      </h2>
      <Sliders {...romanceData} />
      <h2 className="mb-2 mt-10 px-5 text-lg text-white md:px-10 md:text-xl xl:px-24">
        News
      </h2>
      <Sliders />
    </>
  );
}
