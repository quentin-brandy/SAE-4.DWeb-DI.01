import CardCategory from "../Card/CardCategory"

export default function Category(){

    return(
        <>
        <ul className="flex flex-wrap gap-10 w-full border-t-2 border-gray-500 text-sm text-textgrey mx-5 py-4 md:mx-10 xl:mx-24">
            <li className="cursor-pointer">
                Cat1
            </li>
            <li className="cursor-pointer">
                Cat2
            </li>
            <li className="cursor-pointer">
                Cat3
            </li>
            <li className="cursor-pointer">
                Cat4
            </li>

            <li className="cursor-pointer">
                Cat5
            </li> 
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