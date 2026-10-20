import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const bg_URL =
  "https://res.cloudinary.com/ynka6gvl/image/upload/v1792509865/mountain-dusk-bg.svg";

function Register() {
  return (
    <div
      className="bg-linear-to-r from-[#4899ec] to-[#18ac78] w-full h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bg_URL})` }}
    >
      <div
        className="w-[40%]
        aspect-square
        bg-white/10
        backdrop-blur-md
        rounded-3xl
        border
        border-white"
      >
        <div className="flex flex-col justify-center mt-10 ml-8">
          <p className="text-4xl text-white">Sign Up</p>
          <p className="text-white">Hello there, sign up to continue</p>
          <div className="text-white! bg-sky-400/10 backdrop-blur-md m-5 p-10 rounded-3xl border-2">
            <div className="flex flex-col gap-2">
              <fieldset className="rounded-full border border-white px-3 pb-2">
                <legend className="px-1 text-white">Name</legend>
                <input
                  className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                  type="text"
                  placeholder="Enter The Full Name"
                />
              </fieldset>
              <fieldset className="rounded-full border border-white px-3 pb-2">
                <legend className="px-1 text-white">Email</legend>
                <input
                  className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                  type="text"
                  placeholder="Enter Your email"
                />
              </fieldset>
              <fieldset className="rounded-full border border-white px-3 pb-2">
                <legend className="px-1 text-white">Password</legend>
                <input
                  className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                  type="text"
                  placeholder="Enter Your Password"
                />
              </fieldset>
              <fieldset className="rounded-full border border-white px-3 pb-2">
                <legend className="px-1 text-white">Confirm Password</legend>
                <input
                  className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                  type="text"
                  placeholder="Re-enter Your Password"
                />
              </fieldset>
              <div className="mt-2 flex flex-col justify-center items-center ">
                <Link to="/Login" className="w-[80%]">
                  <Button
                    className="text-white! bg-black! w-full hover:bg-white! hover:text-black!"
                    type="submit"
                    onClick={() =>
                      sessionStorage.setItem("showLoginAlert", "true")
                    }
                  >
                    Register
                  </Button>
                </Link>
              </div>
              <p className="mt-2 w-full text-center text-red-600">OR</p>
              <div className="mt-2 flex items-center justify-center gap-8">
                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="cursor-pointer text-4xl transition-transform hover:scale-110"
                >
                  <FcGoogle />
                </button>
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="cursor-pointer  text-4xl text-[#1877f2] transition-transform hover:scale-110"
                >
                  <FaFacebookF />
                </button>
              </div>
              <p className="mx-auto mt-2 max-w-xs text-center text-xs leading-5 text-white/70">
                By continuing you confirm that you agree with our Term &amp;
                Condition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
