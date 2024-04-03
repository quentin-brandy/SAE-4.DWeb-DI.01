import { Link, useNavigate} from "react-router-dom";

export default function CardEp({ img, name, seen }) {
  const navigate = useNavigate();
  const handleserie = () => {
    let token = cookieStore.get("token connexion").then((token) => {
      if (token) {
      } else {
        navigate("/account/signin");
      }
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
