import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { Createuser } from "../../libs/loaders";

export default function SignUp() {
  const navigate = useNavigate();
  const [isEmailInputClicked, setIsEmailInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [isConfirmPasswordInputClicked, setIsConfirmPasswordInputClicked] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
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
  const handleConfirmPasswordInputClick = () => {
    setIsConfirmPasswordInputClicked(true);
  };

  const handleInputBlur = () => {
    setIsEmailInputClicked(false);
    setIsPasswordInputClicked(false);
    setIsConfirmPasswordInputClicked(false);
    if (formData.email && !validateEmail(formData.email)) {
      setIsEmailValid(false);
    } else if (formData.email === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (formData.password && !validatePassword(formData.password)) {
      setIsPasswordValid(false);
    } else if (formData.password === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const test = () => {
    console.log("test");
  };
  const validatePassword = (password) => {
    const re = /^.{6,}$/;
    return re.test(password);
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
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
      const response = await Createuser(formData);
      if (response.ok == true) {
        navigate("/account/signin");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Une erreur s'est produite lors de l'inscription");
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
            <h1 className="text-xl font-semibold">Create a CBS Account</h1>
            <h3>Step 1 of 1</h3>
          </div>

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
                Email
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
                  isPasswordInputClicked && !isPasswordValid
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
            {!isPasswordValid && (
              <div className="text-red-500">
                Password must contain at least 6 characters
              </div>
            )}
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleConfirmPasswordInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
                  isPasswordInputClicked && !isPasswordValid
                    ? "border-blue-500"
                    : "border-black"
                }`}
                type="password"
                required="required"
                aria-required="true"
                name="password"
                value={confirmPasswordValue}
                onChange={handleConfirmPasswordChange}
              />
              <label
                htmlFor="password"
                className={`pointer-events-none absolute pl-4 text-background opacity-70 ${
                  formData.password !== ""
                    ? "-top-1 text-xs transition-all duration-300 ease-in-out"
                    : ""
                }`}
              >
                Confirm Password
              </label>
            </div>
            {formData.password !== confirmPasswordValue && (
              <div className="text-red-500">Password must be the same</div>
            )}
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
              disabled={
                !isEmailValid ||
                !isPasswordValid ||
                formData.password !== confirmPasswordValue
              }
              className={`w-full cursor-pointer bg-blue-500 py-2 font-semibold text-white ${
                !isEmailValid ||
                !isPasswordValid ||
                formData.password !== confirmPasswordValue
                  ? "bg-gray-500"
                  : ""
              } `}
            >
              {" "}
              CONTINUE{" "}
            </button>
          </Form>
          <p className="text-xs text-white">
            Un error as occure during the precess Ply try again .
          </p>
        </div>
      </section>
    </>
  );
}
