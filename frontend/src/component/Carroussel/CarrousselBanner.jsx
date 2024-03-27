import Button from '../Button/Button'
export default function CarrousselBanner(data){
    return(
        <>
        <div className="w-screen flex flex-col justify-end ">
          <img className='relative w-screen min-h-[565px] aspect-video max-h-[700px] 2xl:max-h-[900px] h-full md:h-3/4 brightness-75 ' src={data.movie.horizontal_url} alt={data.movie.name} />
          <div className="absolute w-screen bottom-80 lg:bottom-52 xl:bottom-0 left-0 right-0 h-[40rem] 2xl:h-[50rem] bg-gradient-to-b from-transparent to-background" />
          <div className='absolute z-40 mx-5 md:mx-10 xl:mx-24 mb-10 '>
            <div className='flex flex-col gap-1'>
              <h1 className='text-textwhite uppercase font-bold text-3xl md:text-6xl'>{data.movie.name}</h1>
              <h2 className=' text-textgreen font-bold text-base md:text-lg uppercase'>{data.movie.catchphrase}</h2>
              <p className='text-textwhite text-base md:text-lg pb-7'>{data.movie.short_desc} </p>
            </div>
            <div className='flex justify-between w-screen md:pr-32'>
              <div className='flex px- items-center gap-2 bg-button '>
                <Button padding="watch" className="font-semibold  uppercase"> Watch Live</Button>
              </div>
            </div>
          </div>
        </div>  
      </>
    )
}