import React from "react";
import Button from "@mui/material/Button";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-linear-to-r from-[#4899ec] to-[#18ac78] w-full h-screen flex justify-center items-center">
      <div
        className="w-[40%]
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
          <p className="text-3xl text-white">WELCOME BACK</p>
        </div>
        <p className="text-center text-white">
          Enter your email and password to access your account
        </p>
        <div className="text-white! bg-sky-400/10 backdrop-blur-md m-10 p-10 rounded-3xl border-2">
          <div className="flex flex-col gap-2">
            <fieldset className="rounded-md border border-white px-3 pb-2">
              <legend className="px-1 text-white">UserName</legend>
              <input
                className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                type="text"
                placeholder="Enter the Username"
              />
            </fieldset>
            <fieldset className="rounded-md border border-white px-3 pb-2">
              <legend className="px-1 text-white">Password</legend>
              <input
                className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                type="text"
                placeholder="Enter the Password"
              />
            </fieldset>
          </div>

          <div className="m-1 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" className="accent-sky-500" />
              <span>Remember Me</span>
            </label>
            <Link to="/">
              <p className="text-blue-900">ForgetPassword?</p>
            </Link>
          </div>
          <div className="mt-3 flex flex-col justify-center items-center ">
            <Link to="/" className="w-[80%]">
              <Button
                className="text-white! bg-black! w-full hover:bg-white! hover:text-black!"
                type="submit"
              >
                Login
              </Button>
            </Link>
            <p className="mt-3 flex text-black">
              Don't have account?
              <Link to="/Register">
                <span className="text-orange-400">Register?</span>
              </Link>
            </p>
          </div>
          <p className="mt-4 w-full text-center text-blue-800">OR Login with</p>
          <div className="mt-3 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Continue with Google"
              className="cursor-pointer text-2xl transition-transform hover:scale-110"
            >
              <FcGoogle />
            </button>
            <button
              type="button"
              aria-label="Continue with Facebook"
              className="cursor-pointer  text-2xl text-[#1877f2] transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              aria-label="Continue with Twitter"
              className="cursor-pointer text-2xl text-[#1da1f2] transition-transform hover:scale-110"
            >
              <FaTwitter />
            </button>
          </div>
          <p className="mx-auto mt-5 max-w-xs text-center text-xs leading-5 text-white/70">
            By continuing you confirm that you agree with our Term &amp;
            Condition
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
