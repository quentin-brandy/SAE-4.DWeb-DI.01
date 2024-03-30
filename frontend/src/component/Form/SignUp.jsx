import { useState } from "react";

export default function SignUp() {
  const [isEmailInputClicked, setIsEmailInputClicked] = useState(false);
  const [isPasswordInputClicked, setIsPasswordInputClicked] = useState(false);
  const [isConfirmPasswordInputClicked, setIsConfirmPasswordInputClicked] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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
    if (emailValue && !validateEmail(emailValue)) {
      setIsEmailValid(false);
    } else if (emailValue === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (passwordValue && !validatePassword(passwordValue)) {
      setIsPasswordValid(false);
    } else if (passwordValue === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
  };


  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const test = () => {
   console.log("test");
  };
  const validatePassword = (password) => {
    const re = /^(?=.*\d)[A-Za-z\d]{4,}$/;
    return re.test(password);
  };
  const validateConfirmPassword = (password , confirmPassword) => {
    return password === confirmPassword;
  };

  return (
    <>
      <section className="flex justify-center items-center px-20 w-full bg-textwhite pt-10">
        <div className="max-w-96">
          <div className="flex flex-wrap gap-10 items-center pb-2 border-b-[1px] justify-between mb-10">
            <h1 className="text-xl font-semibold">Create a CBS Account</h1>
            <h3>Step 1 of 1</h3>
          </div>

          <form className="flex flex-col gap-4" method="post" action="">
            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleEmailInputClick}
                className={`w-full p-4 border-[1px] focus:border-blue-500 focus:outline-none ${
                  isEmailInputClicked && !isEmailValid ? "border-blue-500" : "border-black"
                }`}
                type="text"
                required="required"
                aria-required="true"
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
              />
              <label
                htmlFor="email"
                className={`absolute pl-4 text-background pointer-events-none opacity-70 ${
                  emailValue !== "" ? "text-xs -top-1 transition-all ease-in-out duration-300" : ""
               }`}
              > Email
              </label>
            </div>
            {!isEmailValid && (
              <div className="text-red-500">Email is invalid or required</div>
            )}

            <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handlePasswordInputClick}
                className={`w-full p-4 border-[1px] focus:border-blue-500 focus:outline-none ${
                  isPasswordInputClicked && !isPasswordValid ? "border-blue-500" : "border-black"
                }`}
                type="password"
                required="required"
                aria-required="true"
                name="password"
                value={passwordValue}
                onChange={handlePasswordChange}
              />
              <label
                htmlFor="password"
                className={`absolute pl-4 text-background pointer-events-none opacity-70 ${
                  passwordValue !== "" ? "text-xs -top-1 transition-all ease-in-out duration-300" : ""
                }`}
              >
                Password
              </label>
            </div>
            {!isPasswordValid && (
              <div className="text-red-500">Password must contain at least 4 characters, including at least one digit</div>
            )}
              <div className="relative flex items-center">
              <input
                onBlur={handleInputBlur}
                onClick={handleConfirmPasswordInputClick}
                className={`w-full p-4 border-[1px] focus:border-blue-500 focus:outline-none ${
                  isPasswordInputClicked && !isPasswordValid ? "border-blue-500" : "border-black"
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
                className={`absolute pl-4 text-background pointer-events-none opacity-70 ${
                  passwordValue !== "" ? "text-xs -top-1 transition-all ease-in-out duration-300" : ""
                }`}
              >
                Confirm Password
              </label>
            </div>
            {passwordValue !== confirmPasswordValue && (
              <div className="text-red-500">Password must be the same</div>
            )}
            <p className="text-xs">
              By pressing "Continue", you confirm that you have read and agree to the <span className="text-blue-500 cursor-pointer underline"> Terms of Use</span> and acknowledge our <span className="text-blue-500 cursor-pointer underline">Privacy Policy</span>.
            </p>
            <button type="button" aria-disabled="true"  disabled={
    !isEmailValid || !isPasswordValid || passwordValue !== confirmPasswordValue
  } onClick={test} className={`w-full bg-blue-500 py-2 cursor-pointer text-white font-semibold ${
    !isEmailValid || !isPasswordValid || passwordValue !== confirmPasswordValue  ? "bg-gray-500" : ""
  } `}> CONTINUE </button>
          </form>
        </div>
      </section>
    </>
  );
}