import Button from '../Button/Button'
import CardEp from '../Card/CardEp'
import CardSerie from '../Card/CardSerie copy'
export default function SerieBanner(){
 
return(
<>
<div className="w-screen flex flex-col justify-end">
<img className='relative w-full min-h-[565px] max-h-[600px] h-full md:h-3/4 brightness-75 ' src='/img/ncis_banner.jpg' alt="ncisbanner" />
<div className='absolute z-10 mx-5 md:mx-10 xl:mx-24 mb-10 '>
        <div className='flex flex-col gap-1'>
        <h1 className='text-textwhite font-bold text-3xl md:text-6xl'>Ncis</h1>
    <h2 className=' text-textgreen font-bold text-base md:text-lg uppercase'>New episode mondays</h2>
    <div className='flex font-bold  text-textwhite text-base md:text-lg uppercase gap-4'>
        <h3>Drama</h3>
        <h3>2024</h3>
    </div>
    <p className='text-textwhite text-base md:text-lg pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed recusandae, </p>
    </div>
    <div className='flex justify-between w-screen pr-10 md:pr-32'>
    <div className='flex items-center gap-2 bg-button w-fit'>
    <img className='h-3' src='/img/arrow_watch.svg' alt="" />
    <Button padding="watch" className="font-semibold  uppercase"> Watch Now</Button>
    </div>
    <img className='max-w-36'  src='/img/cbs_original.png' alt="" />
    </div>
    </div>
    </div> 
   <section className='bg-background px-5 md:px-10 xl:px-24'>
    <article>
    <h2 className='text-textwhite font-bold text-base md:text-lg pt-10'>Trailer</h2>
    <div className='mt-4'>
        <CardEp/>
    </div>
    </article>
    <article>     
    <h2 className='text-textwhite text-base  font-bold md:text-lg pt-10'>Related Shows</h2>  
    <div className="flex gap-2 w-screen">
                <CardSerie />     
                <CardSerie />   
                <CardSerie />   
                <CardSerie />   
                <CardSerie />    
                </div>       
    </article>
   </section>
    <section className=' flex flex-col md:flex-row gap-10 text-textwhite bg-background px-5 md:px-10 xl:px-24 pt-16'>
        <div className='flex flex-col w-96 gap-6'>
        <h2 className=' text-base font-bold md:text-lg'>About</h2>
        <div>
            <h2 className='text-xl font-bold md:text-3xl '>NCIS</h2>
            <h3 className='text-sm text-textgrey uppercase'>new episode mondays</h3>
        </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
            <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod reiciendis aperiam laboriosam. Ducimus voluptatem obcaecati ullam inventore veritatis molestias qui, eveniet in vitae natus quos fugit officia laudantium a.</p>
            <button className=' text-blue-500'>read more</button>
        </div>
    </section>


</>

)

}