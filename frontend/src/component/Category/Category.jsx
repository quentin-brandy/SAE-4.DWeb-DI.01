import CardCategory from "../Card/CardCategory"

export function Categories({name}){
console.log(name);
    return(
 <li className="cursor-pointer">{name}</li>
    )
}

export default function Category(data){
console.log(data);
    return(
        <>
        <ul className="flex flex-wrap gap-10 w-full border-t-2 border-gray-500 text-sm text-textgrey mx-5 py-4 md:mx-10 xl:mx-24">
            {data.category.map((item, index) => (
    <div key={index}>
      <Categories name={item.name}/>
    </div>
  ))}  
        </ul>

        <section className="px-5 md:px-10 xl:px-24">
            <div className="grid grid-cols-16 gap-2 ">
                <CardCategory />     
                <CardCategory />   
                <CardCategory />   
                <CardCategory />   
                <CardCategory />   
                <CardCategory />  
                <CardCategory />  
                <CardCategory />  
                </div>
        </section>
</>
    )
}