import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ChangePassword } from "../../libs/loaders";

export default function UpdatePassword({password}) {
  const navigate = useNavigate();
  const [isOldPasswordInputClicked, setIsOldPasswordInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [isConfirmPasswordInputClicked, setIsConfirmPasswordInputClicked] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    oldpassword: "",
    password: "",
  });

  const handleOldPasswordInputClick = () => {
    setIsOldPasswordInputClicked(true);
  };
  const handlePasswordInputClick = () => {
    setIsPasswordInputClicked(true);
  };
  const handleConfirmPasswordInputClick = () => {
    setIsConfirmPasswordInputClicked(true);
  };

  const handleInputBlur = () => {
    setIsPasswordInputClicked(false);
    setIsConfirmPasswordInputClicked(false);

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
      const response = await ChangePassword(formData);
      if (response.ok == true) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error as occured during the process");
    }
  };

  return (
    <>
    {password === "visible" && (
        <div className="w-full flex flex-col items-center border-b-[1px] pb-5  justify-center">
      {errorMessage && (
        <div className=" flex justify-center bg-textwhite py-4 text-xl font-semibold text-red-500">
          {errorMessage}
        </div>
      )}
      <section className="flex w-full items-center justify-center bg-textwhite px-20 pt-10">
        <div className="max-w-96">
          <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleOldPasswordInputClick}
                className={`w-full border-[1px] p-4 focus:border-blue-500 focus:outline-none ${
                  isOldPasswordInputClicked
                    ? "border-blue-500"
                    : "border-black"
                }`}
                type="password"
                required="required"
                aria-required="true"
                name="oldpassword"
                value={formData.oldpassword}
                onChange={handleChange}
              />
              <label
                htmlFor="oldpassword"
                className={`pointer-events-none absolute pl-4 text-background opacity-70 ${
                  formData.oldpassword !== ""
                    ? "-top-1 text-xs transition-all duration-300 ease-in-out"
                    : ""
                }`}
              >
                {" "}
               Old Password
              </label>
            </div>

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
            <button
              type="submit"
              aria-disabled="true"
              disabled={
                formData.oldpassword === "" || 
                !isPasswordValid ||
                formData.password !== confirmPasswordValue
              }
              className={`w-full cursor-pointer bg-blue-500 py-2 font-semibold text-white ${
                formData.oldpassword === "" || 
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
      </div>
        )}
    </>
  );
}
