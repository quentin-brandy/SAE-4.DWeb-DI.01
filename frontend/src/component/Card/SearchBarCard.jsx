import { Link , useNavigate } from "react-router-dom"
export default function SearchBarCard (item) {
  const navigate = useNavigate();
  const handleserie = () => {
    
    let token = cookieStore.get("token connexion")
        .then((token) => {
          if (token) {
          } else {
           navigate("/account/signin")
          }
        })
  }
    return(
        <Link onClick={handleserie} to={`/${item.name}`} class="relative">
        <img class="block" src={item.horizontal_url} alt={item.name}/>
      </Link>

    )
}