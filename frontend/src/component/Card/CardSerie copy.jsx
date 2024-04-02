import { Link , useNavigate } from "react-router-dom"

export default function CardEp ({img , name}) {
  const navigate = useNavigate();
  const handleserie = () => {
    
    let token = cookieStore.get("token connexion")
        .then((token) => {
          if (token) {
          } else {
           navigate("/account/signin")
          }
        })
  }
    return(
      <Link onClick={handleserie} to={`/${name}`}> 
         <>
<li className='cursor-pointer hover:scale-110 mb-0'>
    <img className='min-h-20 max-w-40 md:max-w-40 xl:max-w-48' src={img} alt="" />
</li>
</>
</Link>

    )
  }