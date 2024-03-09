import img from  '../../assets/nciss_sydney.jpg'
export default function SearchBarCard () {

    return(
        <a class=" col-span-6 w-full cursor-pointer hover:scale-110 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-0">
        <div class="relative">
        <img class="block" src={img} alt=""/>
      </div>
      </a>
    )
}