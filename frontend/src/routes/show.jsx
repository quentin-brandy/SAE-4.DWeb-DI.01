import Category from "../component/Category/Category";
import NavBar from "../component/NavBar/NavBar";
import { GetShowMovies, GetCategory } from "../libs/loaders";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
export async function loader() {
  let Category = await GetCategory();
  return Category;
}

export default function Show() {
  const data = useLoaderData();
  return (
    <>
      <NavBar />
      <Category {...data} />
      <Outlet />
      <Footer />
    </>
  );
}
