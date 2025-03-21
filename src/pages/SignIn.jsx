import React from "react";

// Import for <Link></Link>
import { Link, Navigate, useNavigate } from "react-router-dom";

//Used in useState hooks
import { useState } from "react";

//Icons import https://react-icons.github.io/react-icons/
import { FaEye, FaEyeSlash } from "react-icons/fa";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  //Allows "formData" to be a variable that holds 2 objects "email" and "password"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Allows value={email} instead of value={formData.email}
  const { email, password } = formData;
  const navigate = useNavigate();

  //Whatever we type will be saved in "formData" above
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate("/")
      }
    } catch (error) {
      toast.error("Bad user credentials")
    }
  }

  return (
    <section className="px-4 py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Sign In</h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
        <div className="mr-6 w-full md:w-1/2 flex justify-center md:justify:end">
          <img
            src="https://images.unsplash.com/photo-1586947726958-3d329e3a5d7a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="goldfish"
            className="w-[95%] h-auto rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-6 md:mt-0">
          <form onSubmit={onSubmit} className="w-full max-w-[500px]">
            <input
              className="mb-5 w-full rounded px-4 py-2 text-gray-700 bg-white transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your Email Address"
            />
            <div className="relative mb-5">
              <input
                className="w-full rounded px-4 py-2 text-gray-700 bg-white transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your Password"
              />

              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="gap-3 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an Account?
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:text-red-700 transition duration-500 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition duration-500 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-300 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign in
            </button>
            <div className="flex items-center my-4 w-full">
              <hr className="border-gray-300 flex-grow" />
              <p className="text-center font-semibold mx-4">OR</p>
              <hr className="border-gray-300 flex-grow" />
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
}
