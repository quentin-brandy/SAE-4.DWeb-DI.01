import SerieBanner from "../component/SerieBanner/SerieBanner";
import CardEp from "../component/Card/CardEp";
import CardSerie from "../component/Card/CardSerie copy";
export default function Serie(){

     
function ArrowLeftIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    )
  }
  
  
  function ArrowRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }
    return(
    <>
    <SerieBanner/>
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
        {/* <button className="absolute bottom-1/4 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-4 py-2 rounded-l-md">
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button className="absolute  right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-4 py-2 rounded-r-md">
        <ArrowRightIcon className="h-6 w-6" />
      </button>   */}
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