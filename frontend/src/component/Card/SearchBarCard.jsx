import { Link, useNavigate } from "react-router-dom";
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
      <img class="block" src={item.horizontal_url} alt={item.name} />
    </Link>
  );
}
