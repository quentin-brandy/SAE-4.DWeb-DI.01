export default function SerieDescription(data) {
  console.log(data);
  return (
    <>
      <section className=" flex flex-col gap-10 bg-background px-5 pt-16 text-textwhite md:flex-row md:px-10 xl:px-24">
        <div className="flex w-96 flex-col gap-6">
          <h2 className=" text-base font-bold md:text-lg">About</h2>
          <div>
            <h2 className="text-xl font-bold md:text-3xl ">{data.name}</h2>
            <h3 className="text-sm uppercase text-textgrey">
              {data.catchphrase}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className=" text-base">{data.long_desc}</p>
        </div>
      </section>
    </>
  );
}
