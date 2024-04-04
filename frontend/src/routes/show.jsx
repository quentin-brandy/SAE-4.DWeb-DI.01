import Category from "../component/Category/Category";
import NavBar from "../component/NavBar/NavBar";
import { GetUserbyToken, GetCategory } from "../libs/loaders";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
export async function loader() {
  let Category = await GetCategory();
  let user = await GetUserbyToken();
  return {Category:Category , User:user};
}

export default function Show() {
  const data = useLoaderData();
  return (
    <>
      <NavBar user={data.user}/>
      <Category {...data.Category} />
      <Outlet />
    </>
  );
}
