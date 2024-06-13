import React, { useState } from "react";
import { Link, redirect, Navigate } from "react-router-dom";
import axios from "axios";

import { EyeIcon, EyeSlashIcon } from "../../assets/icons";

export default function Login() {
  const { user, setUser, setIsLoading } = useState();
  console.log(user);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [togglePassword, setTogglePassword] = useState({
    password: input.password,
    toggle: false,
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", input);
      console.log("data", data);
      setUser(data);
      setIsLoading(false);
      setRedirect(true);
      console.log("Successfully logged in.");
    } catch (err) {
      console.log(err);
    }
  };

  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="bg-white">
      <form
        name="login"
        className="max-w-screen-md mx-auto border-2 rounded-lg mt-10 p-10 shadow-lg "
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h1 className="text-3xl font-semibold">Welcome Back!</h1>
        <span className="">Don't Have An Account?</span>{" "}
        <Link to="/signup">
          <span className="text-primary font-semibold">Sign Up</span>
        </Link>
        <div className="flex flex-col gap-y-8 my-8  ">
          <div className="flex flex-col group relative">
            <label
              htmlFor=""
              className="absolute text-sm -top-2 left-2 bg-white px-2 group-focus-within:text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-white"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col group relative">
            <label
              htmlFor=""
              className="absolute text-sm -top-2 left-2 bg-tertiary px-2 group-focus-within:text-gray-80"
            >
              Password
            </label>
            <input
              type={togglePassword.toggle ? "text" : "password"}
              name="password"
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-tertiary"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />

            {togglePassword.toggle ? (
              <EyeIcon
                className="absolute top-3 right-4 text-lg"
                onClick={(e) =>
                  setTogglePassword({
                    password: input.password,
                    toggle: !togglePassword.toggle,
                  })
                }
              />
            ) : (
              <EyeSlashIcon
                className="text-lg absolute top-3 right-4"
                onClick={(e) =>
                  setTogglePassword({
                    password: input.password,
                    toggle: !togglePassword.toggle,
                  })
                }
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
