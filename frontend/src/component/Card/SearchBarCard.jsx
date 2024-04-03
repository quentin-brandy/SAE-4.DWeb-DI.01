import { Link, useNavigate } from "react-router-dom";
import { GetUserbyToken } from "../../libs/loaders";
export default function SearchBarCard(item) {
  const navigate = useNavigate();
  const handleserie = () => {
    let user = GetUserbyToken();
   
      user.then((value) => {
        if (value == "no") {
          navigate("/account/signin");
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Link onClick={handleserie} to={`/${item.name}`} class="relative">
       {item.Seen === true && (
            <img className="absolute h-6 w-6" src="/img/checkmark.svg" alt="" />
          )}
      <img class="block" src={item.horizontal_url} alt={item.name} />
    </Link>
  );
}
