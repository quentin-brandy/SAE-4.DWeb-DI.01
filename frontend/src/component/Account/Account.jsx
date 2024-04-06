import { useNavigate } from "react-router-dom";

export default function Account(data){
    console.log(data);
    const navigate = useNavigate();
    const handlelogout =   () => {
        cookieStore.delete("token connexion")
        navigate("/")
      };
    return(
        <>
        <div className="flex flex-col items-start gap-4 bg-textwhite justify-start px-8 pt-10">
            <h1 className="font-bold text-3xl pb-5 border-b-[1px] w-full">Account</h1>
            <div  className="flex flex-col w-full gap-7">
            <h2 className="font-semibold">Email & Password</h2>
            <div className="flex w-full justify-between border-b-[1px] pb-4">
                <h3 className=" text-background opacity-70">Email</h3>
                <h3>{data.email}</h3>
                <h3 className="text-blue-500 cursor-pointer">Edit Email</h3>
            </div>
            <div className="flex w-full justify-between border-b-[1px] pb-4">
                <h3 className=" text-background opacity-70">Password</h3>
                <h3> ••••••••••</h3>
                <h3 className="text-blue-500 cursor-pointer">Edit Password</h3>
            </div>
            </div>
            <div  className="flex flex-col w-full gap-7">
            <h2 className="font-semibold">Mon Historique</h2>
            <div className="flex w-full justify-between border-b-[1px] pb-4">
                <h3 className=" text-background opacity-70">Historique</h3>
                <h3 className="text-blue-500 cursor-pointer">Supprimez mon historique</h3>
            </div>
            </div>
            <div  className="flex flex-col w-full gap-7">
            <h2 className="font-semibold">Mon Compte</h2>
            <div className="flex w-full justify-between  pb-4">
                <h3 className=" text-background opacity-70">Historique</h3>
                <h3 className="text-blue-500 cursor-pointer" onClick={handlelogout}>Me déconnecter</h3>
            </div>
            </div>
        </div>
        </>
    )
}