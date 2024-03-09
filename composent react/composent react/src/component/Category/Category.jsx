import CardCategory from "./CardCategory"

export default function Category(){

    return(
        <>
        <ul className="flex flex-wrap gap-10 text-sm text-textgrey px-5 md:px-10 xl:px-24">
            <li>
                Cat1
            </li>
            <li>
                Cat2
            </li>
            <li>
                Cat3
            </li>
            <li>
                Cat4
            </li>

            <li>
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