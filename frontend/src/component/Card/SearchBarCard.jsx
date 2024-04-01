import { Link } from "react-router-dom"
export default function SearchBarCard (item) {
 
    return(
        <Link to={`/${item.name}`} class="relative">
        <img class="block" src={item.horizontal_url} alt={item.name}/>
      </Link>

    )
}