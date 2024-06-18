import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/useAuth";

import { EyeIcon, EyeSlashIcon, XMarkIcon } from "../../assets/icons";
import { FacebookIcon, TwitterIcon } from "../../assets/icons";
import tailwindConfig from "../../../tailwind.config";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setModal } from "../../redux/reducers/ui";
import toast from "react-hot-toast";

export default function Login() {
  const { user, setUser, loginUser, setIsLoading, setErrors } = useAuth();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios.post("/api/user/login", { email, password });
      console.log("DATA:", data);
      loginUser(data.user);
      dispatch(closeModal());
      toast.success(data.message);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div
      className="bg-white p-8 rounded-md tablet:shadow-lg shadow-gray-80 flex flex-col gap-y-8 w-full tablet:max-w-screen-tablet z-20 "
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="w-6 h-6 self-end flex tablet:hidden"
        onClick={(e) => dispatch(closeModal())}
      >
        <XMarkIcon />
      </button>
      <form
        action=""
        className="w-full flex flex-col gap-y-4 "
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="">
          <h1 className="">Login</h1>
          <p className="">Welcome, please login to you account.</p>
        </div>
        <div className="flex flex-col gap-y-4 ">
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
              value={email}
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />

            {showPassword === false ? (
              <button
                className=""
                onClick={(e) => {
                  setShowPassword(true);
                }}
              >
                <EyeIcon className="absolute top-3 right-4 h-5 w-5" />
              </button>
            ) : (
              <button
                className=""
                onClick={(e) => {
                  setShowPassword(false);
                }}
              >
                <EyeSlashIcon className="h-5 w-5 absolute top-3 right-4" />
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2">
            <input type="checkbox" name="remember" id="" />
            <p className="">Remember me</p>
          </div>
          <Link to="" className="">
            <a className="text-primary">Forgot password</a>
          </Link>
        </div>
        <button className="btn w-full bg-secondary text-tertiary">Login</button>
      </form>
      <div className="w-full relative">
        <hr className="" />
        <p className="bg-tertiary px-2 absolute absolute-center">
          Or login with
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4">
        <Link to="/">
          <TwitterIcon
            fill={tailwindConfig.theme.colors.primary}
            className={"w-6 h-6"}
          />
        </Link>
        <Link to="/">
          <FacebookIcon
            fill={tailwindConfig.theme.colors.primary}
            className={"w-6 h-6"}
          />
        </Link>
      </div>
      <p className="text-center">
        Don't have an account?
        <button
          className="pl-2 text-primary hover:cursor-pointer"
          onClick={() =>
            dispatch(setModal({ isVisible: true, content: "signup" }))
          }
        >
          Signup
        </button>
      </p>
    </div>
  );
}
