import { Link, useNavigate } from "react-router-dom";
import { GetUserbyToken } from "../../libs/loaders";

export default function CardEp({ img, name, seen }) {
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
    <Link onClick={handleserie} to={`/${name}`}>
      <>
        <li className="mb-0 cursor-pointer hover:scale-110">
          {seen === true && (
            <img className="absolute h-6 w-6" src="/img/checkmark.svg" alt="" />
          )}
          <img
            className="min-h-20 max-w-40 md:max-w-40 xl:max-w-48"
            src={img}
            alt=""
          />
        </li>
      </>
    </Link>
  );
}
