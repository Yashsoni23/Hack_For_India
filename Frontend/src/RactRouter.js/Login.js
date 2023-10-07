import React, { useState } from "react";
import { useGlobal } from "./Context";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const UseGlobal = useGlobal();
  const [loginData, setLoginData] = useState({
    Email: "",
    Passwrod: "",
    ConfPasswrod: "",
    addres: "",
  });

  const heandalinput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const setDataToLocalSt = () => {
    localStorage.setItem("loginData", JSON.stringify(loginData));
    UseGlobal.setIsLoggedIn(true);
  };

  return (
    <section className="flex justify-center w-full h-max">
      <div className=" flex max-sm:flex-col h-screen w-full">
        <div className="flex  pt-[6rem] h-full">
          {/* <img src="./Mobilelogin-rafiki.png" alt="" /> */}
        </div>
        <div className="flex pt-[6rem] max-sm:pt-0 p-[4rem] max-sm:p-[2.5rem] w-1/2 h-full">
          {!isLogin ? (
            <div className="box flex gap-5 p-[2rem] pt-5  bg-[#f7f5f5] w-full flex-col rounded-xl">
              <h1 className="font-bold text-[2vw]  text-center w-full ">
                Login
              </h1>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Username</h1>
                <input
                  type="text"
                  className="pl-3  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Username</h1>
                <input
                  type="text"
                  className="pl-3  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="bg-gradient-to-r from-primaryColor/70  to-primaryColor p-2 rounded-md text-white hover:bg-primaryColor/90"
              >
                Submit
              </button>

              <span className="text-center text-primaryColor">
                {" "}
                Don't haven account ?{" "}
                <a
                  className="cursor-pointer font-semibold"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Signup
                </a>
              </span>
            </div>
          ) : (
            <div className="box flex gap-5 p-20 max-sm:p-[2rem] pt-5  bg-[#f7f5f5] w-full flex-col rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.4)]">
              <h1 className="font-bold text-[2vw]  text-center w-full ">
                Sign Up
              </h1>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Username</h1>
                <input
                  required
                  onChange={heandalinput}
                  name="name"
                  value={loginData.name}
                  type="text"
                  className="pl-3 bg-transparent  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Eamil</h1>
                <input
                  required
                  type="email"
                  onChange={heandalinput}
                  name="Email"
                  value={loginData.Email}
                  className="pl-3 bg-transparent  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Password</h1>
                <input
                  required
                  onChange={heandalinput}
                  name="Passwrod"
                  value={loginData.Passwrod}
                  type="text"
                  className="pl-3 bg-transparent  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 text-primaryColor">
                <h1 className="font-semibold">Confirm Password</h1>
                <input
                  required
                  onChange={heandalinput}
                  name="ConfPasswrod"
                  value={loginData.ConfPasswrod}
                  type="text"
                  className="pl-3 bg-transparent  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md"
                />
              </div>
              <button
                onClick={() => {
                  setDataToLocalSt();
                }}
                type="submit"
                className="bg-gradient-to-r from-primaryColor/70  to-primaryColor p-2 rounded-md text-white hover:bg-primaryColor/90"
              >
                Submit
              </button>

              <span className="text-center text-primaryColor">
                {" "}
                Already haven account ?{" "}
                <a
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                  className="cursor-pointer font-semibold"
                >
                  Login
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="max-sm:hidden flex  h-full">
          <img src="./Mobilelogin-rafiki.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Login;
