export default function CardTrailer ({name, trailer, date, image}) {
console.log(name);
    return(
<div className='bg-background'>
    <img src="/{image}" alt="" />
    <div className='flex flex-col items-start'>
        <div className='flex gap-2 text-xs lg:text-sm'>
            <div className='flex gap-1 text-textwhite'>
        <h6> S1</h6>
        <h6>E26</h6>
            </div>
            <h6 className='text-textgrey'>{date}</h6>
        </div>
        <h4 className='text-md font-bold text-textwhite'>{name}</h4>
    </div>
</div>


    )
}