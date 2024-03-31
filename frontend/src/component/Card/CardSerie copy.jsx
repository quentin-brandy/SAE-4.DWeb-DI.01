import { Link } from "react-router-dom"

export default function CardEp ({img , name}) {
    if(localStorage.getItem("token connexion") == null){
        return(
            <Link to="/login"> 
               <>
      <div className='cursor-pointer hover:scale-110 mb-0'>
          <img className='min-h-20 max-w-40 md:max-w-40 xl:max-w-48' src={img} alt="" />
      </div>
      </>
      </Link>
      
          )
    }
  else{  
    return(
      <Link to={`/${name}`}> 
         <>
<div className='cursor-pointer hover:scale-110 mb-0'>
    <img className='min-h-20 max-w-40 md:max-w-40 xl:max-w-48' src={img} alt="" />
</div>
</>
</Link>

    )
  }
}