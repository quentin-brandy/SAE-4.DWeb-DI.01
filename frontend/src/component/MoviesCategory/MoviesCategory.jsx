import CardCategory from "../Card/CardCategory";

export default function MoviesCategories(data) {
    const datamovies = Object.values(data);
  return (
    <>
      <section className="px-5 md:px-10 xl:px-24">
        <div className="grid grid-cols-12 gap-2 ">
          {datamovies.map((item, index) => (
            <CardCategory
              key={index}
              title={item.name}
              image={item.vertical_url}
              seen={item.Seen}
            />
          ))}
        </div>
      </section>
    </>
  );
}
