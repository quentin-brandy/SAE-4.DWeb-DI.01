import imgserie from '../../assets/ncis_banner.jpg'
import Button from '../Button/Button'
import arrow from '../../assets/arrow_watch.svg'

export default function SerieBanner(){
  
return(
<>
<div className="w-screen flex flex-col justify-end">
<img className='relative w-full min-h-[565px] max-h-[715px] h-full md:h-3/4 brightness-75' src={imgserie} alt="ncisbanner" />
<div className='absolute z-10 mx-5 md:mx-10 xl:mx-24 mb-10'>
        <div className='flex flex-col gap-1'>
        <h1 className='text-textwhite font-bold text-3xl md:text-6xl'>Ncis</h1>
    <h2 className=' text-textgreen font-bold text-base md:text-lg uppercase'>New episode mondays</h2>
    <div className='flex font-bold  text-textwhite text-base md:text-lg uppercase gap-4'>
        <h3>Drama</h3>
        <h3>2024</h3>
    </div>
    <p className='text-textwhite text-base md:text-lg pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed recusandae, </p>
    </div>
    <div className='flex items-center gap-4 bg-button w-fit'>
    <img className='h-3' src={arrow} alt="" />
    <Button padding="watch" className="font-semibold  uppercase"> Watch Now</Button>
    </div>
    </div>
   
    
</div> 

</>

)

}