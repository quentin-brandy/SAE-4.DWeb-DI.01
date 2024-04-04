import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ChangeEmail} from "../../libs/loaders";
export default function UpdateEmail({email}) {
  const navigate = useNavigate();
  const [isEmailInputClicked, setIsEmailInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
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
    if (formData.email && !validateEmail(formData.email)) {
      setIsEmailValid(false);
    } else if (formData.email === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };


  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
       const response = await ChangeEmail(formData);
      if (response.ok == true) {
        navigate("/account");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error as occured during the process");
    }
  };

  return (
    <>
    {email === "visible" && (
        <div className="w-full flex flex-col items-center border-b-[1px] pb-5  justify-center">
             {errorMessage && (
        <div className=" flex justify-center bg-textwhite py-4 text-xl font-semibold text-red-500">
          {errorMessage}
        </div>
      )}
      <section className="flex w-full items-center justify-center bg-textwhite px-20 pt-10">
          <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleEmailInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
                  isEmailInputClicked && !isEmailValid
                    ? "border-blue-500"
                    : "border-black"
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
                New Email
              </label>
            </div>
            {!isEmailValid && (
              <div className="text-red-500">Email is invalid or required</div>
            )}

            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handlePasswordInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
                  isPasswordInputClicked 
                    ? "border-blue-500"
                    : "border-black"
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
            <button
              type="submit"
              aria-disabled="true"
              disabled={
                !isEmailValid 
                
              }
              className={`w-full cursor-pointer bg-blue-500 py-2 font-semibold text-white ${
                !isEmailValid 
                  ? "bg-gray-500"
                  : ""
              } `}
            >
              {" "}
              CONTINUE{" "}
            </button>
          </Form>
      </section>
      </div>
        )}
    </>
  );
}
