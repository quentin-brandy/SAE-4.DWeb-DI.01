import { Link , useNavigate , redirect } from "react-router-dom"

export default function CardEp ({img , name , seen}) {
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
{seen === true && <img className="absolute w-6 h-6" src="/img/checkmark.svg" alt="" />}
    <img className='min-h-20 max-w-40 md:max-w-40 xl:max-w-48' src={img} alt="" />
</li>
</>
</Link>

    )
  }