import Account from "../component/Account/Account";
import { GetUserbyToken } from "../libs/loaders";
import { useLoaderData } from "react-router-dom";
export async function loader(){
    let data = await cookieStore.get("token connexion");
    let MoviesData =  await GetUserbyToken(data.value);
    return MoviesData;
  }

export default function Accounteroute(){
    const data = useLoaderData()
    return(
        
    <Account email={data}/>
    )
}