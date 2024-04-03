import { useState } from "react";
import { Link } from "react-router-dom";

export function Categories({ name, id, onClick, isSelected }) {
  const handleClick = () => {
    onClick(id); // Appeler la fonction de rappel onClick avec l'id de la catégorie
  };
  let test = name.toLowerCase();
  return (
    <Link to={`/show/${test}`}>
      <li
        id={id}
        className={`cursor-pointer text-sm font-normal md:text-lg ${isSelected ? "font-bold text-white" : ""}`}
        onClick={handleClick}
      >
        {name}{" "}
      </li>
    </Link>
  );
}

export default function Category(data) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  let data2 = Object.values(data);
  return (
    <>
      <ul className="mx-5 flex w-full flex-wrap gap-10 border-t-2 border-gray-500 py-4 text-sm text-textgrey md:mx-10 xl:mx-24">
        {data2.map((item) => (
          <Categories
            onClick={handleCategoryClick}
            key={item.id}
            name={item.name}
            id={item.id}
            isSelected={selectedCategory === item.id}
          />
        ))}
      </ul>

      {/* <section className="px-5 md:px-10 xl:px-24">
            <div className="grid grid-cols-12 gap-2 ">
                  {data.movies.movies.map((item, index) => (
      <CardCategory key={index} title={item.name} image={item.vertical_url}/>
  ))}    
                </div>
        </section> */}
    </>
  );
}
