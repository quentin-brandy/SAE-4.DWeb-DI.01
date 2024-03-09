import img from '../../assets/afternight.jpg'
export default function CardEp () {

    return(
<div className='bg-background'>
    <img src={img} alt="" />
    <div className='flex flex-col items-start'>
        <div className='flex gap-2 text-xs lg:text-sm'>
            <div className='flex gap-1 text-textwhite'>
        <h6> S1</h6>
        <h6>E26</h6>
            </div>
            <h6 className='text-textgrey'>03/06/24</h6>
        </div>
        <h4 className='text-md font-bold text-textwhite'>After Midnight</h4>
    </div>
</div>


    )
}