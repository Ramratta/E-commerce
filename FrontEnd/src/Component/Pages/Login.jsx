import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-linear-to-r from-[#4899ec] to-[#18ac78] w-full h-screen flex justify-center items-center">
      <div
        className="w-[30%]
        aspect-square
        bg-white/10
        backdrop-blur-md
        rounded-3xl
        border
        border-white"
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <span className="material-symbols-outlined text-6xl! text-blue-600">
            account_circle
          </span>
          <p className="text-3xl text-white">CUSTOMER LOGIN</p>
        </div>
        <div className="text-white! bg-sky-400 m-10 p-10 rounded-3xl">
          <div className="flex flex-col gap-2">
            <label>UserName</label>
            <input
              className="p-1 text-white! focus:outline-none"
              type="text"
              placeholder="Enter the Username"
            />
            <label>PassWord</label>
            <input
              className="p-1  text-white! focus:outline-none "
              type="password"
              placeholder="Enter the Password"
            />
          </div>
          <div className=" flex justify-end m-1">
            <Link to="/">
              <p className="text-blue-900">ForgetPassword?</p>
            </Link>
          </div>
          <div className="mt-3 flex justify-center items-center ">
            <Link to="/" className="w-[80%]">
              <Button className="text-white! bg-black! w-full" type="submit">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
