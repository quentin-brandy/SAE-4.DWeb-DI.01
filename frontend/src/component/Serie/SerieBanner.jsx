import { Link } from 'react-router-dom'
import { PlayButton } from '../Button/Button'
import CardEp from '../Card/CardEp'
export default function SerieBanner(data){
return(
<>
<div className="w-screen flex flex-col justify-end">
<img className='relative w-full min-h-[565px] aspect-video max-h-[700px] 2xl:max-h-[900px] h-full md:h-3/4' src={data.horizontal_url} alt="ncisbanner" />
<div className="absolute w-screen bottom-90 left-0 right-0 h-[10rem] 2xl:h-[50rem] bg-gradient-to-b from-transparent to-background" />
<div className="absolute w-screen top-0 left-0 right-0 h-72  bg-gradient-to-t from-transparent to-background" />
<div className=' absolute mx-5 md:mx-10 xl:mx-24 mb-10 '>
        <div className='flex flex-col gap-1'>
        <h1 className='text-textwhite font-bold text-3xl md:text-6xl'>{data.name}</h1>
    <h2 className=' text-textgreen font-bold text-base md:text-lg uppercase'>{data.catchphrase}</h2>
    <div className='flex font-bold  text-textwhite text-base md:text-lg uppercase gap-4'>
        <h3>Drama</h3>
        <h3>{data.release_date}</h3>
    </div>
    <p className='text-textwhite text-base md:text-lg pb-7'>{data.short_desc} </p>
    </div>
    <div className='flex justify-between w-screen pr-10 md:pr-32'>
        <Link to={data.trailer}>
    <PlayButton intent="play" padding="watch" className="font-semibold  uppercase"> Watch Now</PlayButton>
    </Link>
    <img className='max-w-36'  src='/img/cbs_original.png' alt="" />
    </div>
    </div>
    </div> 
   <section className=' bg-background px-5 md:px-10 xl:px-24 mb-16'>
    <article>
    <h2 className='text-textwhite font-bold text-base md:text-lg pt-10'>Trailer</h2>
    <div className='mt-4'>
        <CardEp name={data.name} trailer={data.trailer} date={data.release_date}/>
    </div>
    </article>
</section>
</>

)

}