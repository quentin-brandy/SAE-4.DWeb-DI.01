import { Link } from "react-router-dom";
import { PlayButton } from "../Button/Button";
import CardEp from "../Card/CardEp";
export default function SerieBanner(data) {
  return (
    <>
      <div className="flex w-screen flex-col justify-end">
        <img
          className="relative aspect-video h-full max-h-[700px] min-h-[565px] w-full md:h-3/4 2xl:max-h-[900px]"
          src={data.horizontal_url}
          alt="ncisbanner"
        />
        <div className="bottom-90 absolute left-0 right-0 h-[10rem] w-screen bg-gradient-to-b from-transparent to-background 2xl:h-[50rem]" />
        <div className="absolute left-0 right-0 top-0 h-72 w-screen  bg-gradient-to-t from-transparent to-background" />
        <div className=" absolute mx-5 mb-10 md:mx-10 xl:mx-24 ">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-textwhite md:text-6xl">
              {data.name}
            </h1>
            <h2 className=" text-base font-bold uppercase text-textgreen md:text-lg">
              {data.catchphrase}
            </h2>
            <div className="flex gap-4  text-base font-bold uppercase text-textwhite md:text-lg">
              <h3>Drama</h3>
              <h3>{data.release_date}</h3>
            </div>
            <p className="pb-7 text-base text-textwhite md:text-lg">
              {data.short_desc}{" "}
            </p>
          </div>
          <div className="flex w-screen justify-between pr-10 md:pr-32">
            <Link to={data.trailer}>
              <PlayButton
                intent="play"
                padding="watch"
                className="font-semibold  uppercase"
              >
                {" "}
                Watch Now
              </PlayButton>
            </Link>
            <img className="max-w-36" src="/img/cbs_original.png" alt="" />
          </div>
        </div>
      </div>
      <section className=" mb-16 bg-background px-5 md:px-10 xl:px-24">
        <article>
          <h2 className="pt-10 text-base font-bold text-textwhite md:text-lg">
            Trailer
          </h2>
          <div className="mt-4">
            <CardEp
              name={data.name}
              trailer={data.trailer}
              date={data.release_date}
            />
          </div>
        </article>
      </section>
    </>
  );
}
