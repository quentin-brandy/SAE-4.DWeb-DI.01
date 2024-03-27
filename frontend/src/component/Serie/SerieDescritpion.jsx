export default function SerieDescription(data){
 console.log(data);
return(
<>
    <section className=' flex flex-col md:flex-row gap-10 text-textwhite bg-background px-5 md:px-10 xl:px-24 pt-16'>
        <div className='flex flex-col w-96 gap-6'>
        <h2 className=' text-base font-bold md:text-lg'>About</h2>
        <div>
            <h2 className='text-xl font-bold md:text-3xl '>{data.name}</h2>
            <h3 className='text-sm text-textgrey uppercase'>{data.catchphrase}</h3>
        </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
            <p className=' text-base'>{data.long_desc}</p>
        </div>
    </section>
</>

)

}