import MoviesCategories from "../component/MoviesCategory/MoviesCategory";
import { useLoaderData } from "react-router-dom";
import { GetShowMovies } from "../libs/loaders";

export async function loader({ params }) {
  let MoviesData = await GetShowMovies(params.Categoryname);
  return MoviesData;
}
export default function Category() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <MoviesCategories {...data} />
    </>
  );
}
