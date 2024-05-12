import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { GetUserbyToken } from "../../libs/loaders";
export default function CarrousselBanner(data) {
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
    <>
      <div className="flex w-screen flex-col justify-end ">
        <img
          className="relative aspect-video h-full max-h-[700px] min-h-[565px] w-screen brightness-75 md:h-3/4 2xl:max-h-[900px] "
          src={`./img/${data.movie.horizontal_url}`}
          alt={data.movie.name}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[20rem] w-screen bg-gradient-to-b from-transparent to-background lg:bottom-0 2xl:h-[50rem]" />
        <div className="absolute left-0 right-0 top-0 h-72 w-screen  bg-gradient-to-t from-transparent to-background" />
        <div className="absolute z-40 mx-5 mb-10 md:mx-10 xl:mx-24 ">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold uppercase text-textwhite md:text-6xl">
              {data.movie.name}
            </h1>
            <h2 className=" text-base font-bold uppercase text-textgreen md:text-lg">
              {data.movie.catchphrase}
            </h2>
            <p className="pb-7 text-base text-textwhite md:text-lg">
              {data.movie.short_desc}{" "}
            </p>
          </div>
          <div className="flex w-screen justify-between md:pr-32">
            <div className="px- flex items-center gap-2 bg-button ">
              <Link onClick={handleserie} to={data.movie.name}>
                <Button padding="watch" className="font-semibold  uppercase">
                  Watch Live
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
