import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setModal } from "../../redux/reducers/ui";
// icons
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "../../assets/icons";
import toast from "react-hot-toast";

export default function Signup() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [togglePassword, setTogglePassword] = useState({
    password: input.password,
    toggle: false,
  });

  const [toggleConfirmPassword, setToggleConfirmPassword] = useState({
    password: input.confirmPassword,
    toggle: false,
  });

  const validateFormInputs = async (input) => {
    console.log("validation");
    let re = "/^[^s@]+@[^s@]+.[^s@]+$/";
    const validationErrors = {};
    if (!input.username.trim()) {
      // check if empty
      validationErrors.username = "username is required.";
    }
    if (!input.email.trim()) {
      validationErrors.email = "email is required.";
    } else if (/^[^s@]+@[^s@]+.[^s@]+$/.test(input.email)) {
      validationErrors.email = "email is not valid.";
    }
    if (!input.password.trim()) {
      validationErrors.password = "password is required.";
    } else if (input.password.length < 6) {
      validationErrors.password = "password should be at least 6 char.";
    }
    if (input.password !== input.confirmPassword) {
      validationErrors.confirmPassword = "password not matched.";
    }

    setErrors(validationErrors);
    // console.log(validationErrors.length);
    // if (validationErrors) {
    // } else {
    //   setErrors(null);
    // }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!errors || errors === undefined) {
      try {
        const { data } = await axios.post("/api/user/signup", {
          username: input.username,
          email: input.email,
          password: input.password,
        });
        console.log(data);
        dispatch(setModal({ isVisible: true, content: "login" }));
        toast.success(data?.message);
      } catch (err) {
        console.log(err.response.data?.message);
        toast.error(err.response.data?.message);
        // setErrors(err.response.data.message);
      }
    }
  };

  return (
    <div
      className="bg-white p-8 rounded-md tablet:shadow-md shadow-gray-50 flex flex-col gap-y-8 w-full tablet:max-w-screen-tablet z-10"
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
        className="w-full flex flex-col gap-y-8 "
        onSubmit={(e) => {
          validateFormInputs(input);
          handleFormSubmit(e);
        }}
      >
        <div className="">
          <h1 className="">Signup</h1>
          <p className="">Welcome, create a new account.</p>
        </div>
        <div className="flex flex-col gap-y-6 ">
          <div className="flex flex-col group relative">
            <label
              htmlFor=""
              className="absolute text-sm -top-2 left-2 bg-white px-2 group-focus-within:text-gray-900"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              value={input.username}
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
            {errors?.username && (
              <span className="w-full p-2 mt-1 bg-primary text-tertiary rounded-lg">
                {errors?.username}
              </span>
            )}
          </div>
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
              value={input.email}
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            {errors?.email && (
              <span className="w-full p-2 mt-1 bg-primary text-tertiary rounded-lg">
                {errors?.email}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col group relative">
            <label
              htmlFor=""
              className="absolute text-sm -top-2 left-2 bg-white px-2 group-focus-within:text-gray-900"
            >
              Password
            </label>
            <input
              name="password"
              value={input.password}
              type={togglePassword.toggle ? "text" : "password"}
              className="w-full border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            {errors?.password && (
              <span className="w-full p-2 mt-1 bg-primary text-tertiary rounded-lg">
                {errors?.password}
              </span>
            )}
            {togglePassword.toggle ? (
              <button
                className=""
                onClick={(e) => {
                  setTogglePassword({
                    password: input.password,
                    toggle: !togglePassword.toggle,
                  });
                }}
              >
                <EyeIcon className="absolute top-3 right-4 h-5 w-5" />
              </button>
            ) : (
              <button
                className=""
                onClick={(e) => {
                  setTogglePassword({
                    password: input.password,
                    toggle: !togglePassword.toggle,
                  });
                }}
              >
                <EyeSlashIcon className="h-5 w-5 absolute top-3 right-4" />
              </button>
            )}
          </div>
          <div className="flex flex-col group relative">
            <label
              htmlFor=""
              className="absolute text-sm -top-2 left-2 bg-white px-2 group-focus-within:text-gray-900"
            >
              Repeat Password
            </label>
            <input
              type={toggleConfirmPassword.toggle ? "text" : "password"}
              name="confirmPassword"
              value={input.confirmPassword}
              className="border-2 border-gray-80 rounded-lg p-2 py-2 focus:outline-bg-gray-50 focus:bg-transparent"
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
            {errors?.confirmPassword && (
              <span className="w-full p-2 mt-1 bg-primary text-tertiary rounded-lg">
                {errors?.confirmPassword}
              </span>
            )}

            {toggleConfirmPassword.toggle ? (
              <button
                className=""
                onClick={(e) => {
                  setToggleConfirmPassword({
                    password: input.password,
                    toggle: !toggleConfirmPassword.toggle,
                  });
                }}
              >
                <EyeIcon className="absolute top-3 right-4 h-5 w-5" />
              </button>
            ) : (
              <button
                className=""
                onClick={(e) => {
                  setToggleConfirmPassword({
                    password: input.password,
                    toggle: !toggleConfirmPassword.toggle,
                  });
                }}
              >
                <EyeSlashIcon className="h-5 w-5 absolute top-3 right-4" />
              </button>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn w-full bg-gray-20 text-white hover:bg-gray-5"
        >
          Signup
        </button>
      </form>

      <p className="text-center">
        Already have an account?
        <button
          className="pl-2 text-primary hover:cursor-pointer"
          onClick={() =>
            dispatch(setModal({ isVisible: true, content: "login" }))
          }
        >
          Login
        </button>
      </p>
    </div>
  );
}
