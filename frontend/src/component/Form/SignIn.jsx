import { useState } from "react";
import { Verifyuser } from "../../libs/loaders";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [isEmailInputClicked, setIsEmailInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
     let data = await Verifyuser(formData);
      console.log(data)
      if (data === "ok") {
        navigate("/");
      }
      else{
        setErrorMessage("Une erreur s'est produite lors de la connexion");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <>
      {errorMessage && (
        <div className=" flex justify-center bg-textwhite py-4 text-xl font-semibold text-red-500">
          {errorMessage}
        </div>
      )}
      <section className="flex w-full items-center justify-center bg-textwhite px-20 pt-10">
        <div className="max-w-96">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-10 border-b-[1px] pb-2">
            <h1 className="text-xl font-semibold">Connexion to CBS Account</h1>
            <h3>Step 1 of 1</h3>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleEmailInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
                  isEmailInputClicked ? "border-blue-500" : "border-black"
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
                className={`pointer-events-none absolute pl-4 text-background opacity-70 ${
                  formData.email !== ""
                    ? "-top-1 text-xs transition-all duration-300 ease-in-out"
                    : ""
                }`}
              >
                {" "}
                Email
              </label>
            </div>

            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handlePasswordInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
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
                className={`pointer-events-none absolute pl-4 text-background opacity-70 ${
                  formData.password !== ""
                    ? "-top-1 text-xs transition-all duration-300 ease-in-out"
                    : ""
                }`}
              >
                Password
              </label>
            </div>
            <p className="text-xs">
              By pressing "Continue", you confirm that you have read and agree
              to the{" "}
              <span className="cursor-pointer text-blue-500 underline">
                {" "}
                Terms of Use
              </span>{" "}
              and acknowledge our{" "}
              <span className="cursor-pointer text-blue-500 underline">
                Privacy Policy
              </span>
              .
            </p>
            <button
              type="submit"
              aria-disabled="true"
              className={`w-full cursor-pointer bg-blue-500 py-2 font-semibold text-white `}
            >
              {" "}
              LOG IN{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
