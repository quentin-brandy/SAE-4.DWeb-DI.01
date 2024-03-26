export default function CardCategory ({title , image}) {

    return(
<article className=' col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0'>
    <img src={image} alt="" />
    <h4 className=' text-base text-textwhite'>{title}</h4>
</article>



    )
}