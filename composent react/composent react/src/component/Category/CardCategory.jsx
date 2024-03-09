import img from '../../assets/fire.jpg'
export default function CardCategory () {

    return(
<article className=' col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0'>
    <img src={img} alt="" />
    <h4 className=' text-base'>Title</h4>
</article>



    )
}