import { Link, useNavigate } from "react-router-dom";
export default function CardCategory({ title, image }) {
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
    <article className=" col-span-6 mb-0 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2">
      <Link onClick={handleserie} to={`/${title}`}>
        <img src={image} alt="" />
        <h4 className=" text-base text-textwhite">{title}</h4>
      </Link>
    </article>
  );
}
