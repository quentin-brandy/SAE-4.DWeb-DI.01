import { Link, useNavigate } from "react-router-dom";
import { GetUserbyToken } from "../../libs/loaders";
export default function CardCategory({ title, image , seen}) {
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
    <article className=" col-span-6 mb-0 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2">
      <Link onClick={handleserie} to={`/${title}`}>
      {seen === true && (
            <img className="absolute h-6 w-6" src="/img/checkmark.svg" alt="" />
          )}
        <img src={image} alt="" />
        <h4 className=" text-base text-textwhite">{title}</h4>
      </Link>
    </article>
  );
}
