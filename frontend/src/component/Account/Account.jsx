import { useNavigate } from "react-router-dom";
import { Resethistory } from "../../libs/loaders";

export default function Account(data) {
  console.log(data);
  const navigate = useNavigate();
  const handlelogout = () => {
    cookieStore.delete("token connexion");
    navigate("/");
  };
  const handlehistory = () => {
    Resethistory(data.email);
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 bg-textwhite px-8 pt-10">
        <h1 className="w-full border-b-[1px] pb-5 text-3xl font-bold">
          Account
        </h1>
        <div className="flex w-full flex-col gap-7">
          <h2 className="font-semibold">Email & Password</h2>
          <div className="flex w-full justify-between border-b-[1px] pb-4">
            <h3 className=" text-background opacity-70">Email</h3>
            <h3>{data.email}</h3>
            <h3 className="cursor-pointer text-blue-500">Edit Email</h3>
          </div>
          <div className="flex w-full justify-between border-b-[1px] pb-4">
            <h3 className=" text-background opacity-70">Password</h3>
            <h3> ••••••••••</h3>
            <h3 className="cursor-pointer text-blue-500">Edit Password</h3>
          </div>
        </div>
        <div className="flex w-full flex-col gap-7">
          <h2 className="font-semibold">Mon Historique</h2>
          <div className="flex w-full justify-between border-b-[1px] pb-4">
            <h3 className=" text-background opacity-70">Historique</h3>
            <h3
              onClick={handlehistory}
              className="cursor-pointer text-blue-500"
            >
              Supprimez mon historique
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-col gap-7">
          <h2 className="font-semibold">Mon Compte</h2>
          <div className="flex w-full justify-between  pb-4">
            <h3 className=" text-background opacity-70">Historique</h3>
            <h3 className="cursor-pointer text-blue-500" onClick={handlelogout}>
              Me déconnecter
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
