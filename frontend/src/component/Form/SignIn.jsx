import { useState , useEffect } from "react";
import { Verifyuser } from "../../libs/loaders";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const history = useNavigate();
  const [isEmailInputClicked, setIsEmailInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
  const handleEmailInputClick = () => {
    setIsEmailInputClicked(true);
  };

  const handlePasswordInputClick = () => {
    setIsPasswordInputClicked(true);
  };


  const handleInputBlur = () => {
    setIsEmailInputClicked(false);
    setIsPasswordInputClicked(false);
  };

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await Verifyuser(formData);
      localStorage.setItem("token connexion" , data.token );
      history("/home");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  return (
    <>
      <section className="flex justify-center items-center px-20 w-full bg-textwhite pt-10">
        <div className="max-w-96">
          <div className="flex flex-wrap gap-10 items-center pb-2 border-b-[1px] justify-between mb-10">
            <h1 className="text-xl font-semibold">Connexion to CBS Account</h1>
            <h3>Step 1 of 1</h3>
          </div>

          <form className="flex flex-col gap-4"  onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleEmailInputClick}
                className={`w-full p-4 border-[1px] focus:border-blue-500 focus:outline-none ${
                  isEmailInputClicked  ? "border-blue-500" : "border-black"
                }`}
                type="text"
                required="required"
                aria-required="true"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className={`absolute pl-4 text-background pointer-events-none opacity-70 ${
                    formData.email !== "" ? "text-xs -top-1 transition-all ease-in-out duration-300" : ""
               }`}
              > Email
              </label>
            </div>

            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handlePasswordInputClick}
                className={`w-full p-4 border-[1px] focus:border-blue-500 focus:outline-none ${
                  isPasswordInputClicked ? "border-blue-500" : "border-black"
                }`}
                type="password"
                required="required"
                aria-required="true"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label
                htmlFor="password"
                className={`absolute pl-4 text-background pointer-events-none opacity-70 ${
                    formData.password !== "" ? "text-xs -top-1 transition-all ease-in-out duration-300" : ""
                }`}
              >
                Password
              </label>
            </div>
            <p className="text-xs">
              By pressing "Continue", you confirm that you have read and agree to the <span className="text-blue-500 cursor-pointer underline"> Terms of Use</span> and acknowledge our <span className="text-blue-500 cursor-pointer underline">Privacy Policy</span>.
            </p>
            <button type="submit" aria-disabled="true"  className={`w-full bg-blue-500 py-2 cursor-pointer text-white font-semibold `}> LOG IN </button>
          </form>
        </div>
      </section>
    </>
  );
}