import React, { useEffect, useState } from "react";
// rrd
import { Outlet } from "react-router-dom";
// library
import axios from "axios";
import toast from "react-hot-toast";
// components
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import MobileNav from "./Nav/Mobile/MobileNav";
import Sidebar from "./Nav/Sidebar/Sidebar";
import AddSub from "../../components/AddSub/AddSub";
// redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/ui";
import { setSubs } from "../../redux/reducers/subscription";
import { useAuth } from "../../context/useAuth";
import PageHeader from "./Header/PageHeader";

export default function RootLayout() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const { user, loginUser, isLoading } = useAuth();

  const uiModal = useSelector((state) => state.ui.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USE EFFECT FETCT SUBS:");
    async function fetchData() {
      if (user) {
        try {
          const { data } = await axios.get(`/api/user/${user._id}/subs`);
          console.log("DATA:", data.subs);
          dispatch(setSubs(data.subs));
        } catch (err) {
          console.log(err);
          toast.error(err.response?.data?.message);
          // setError(err.response.data.message);
        }
      }
    }
    fetchData();
  }, [user]);

  return (
    <div className="flex-col tablet:flex-row flex w-full max-w-screen-desktop mx-auto h-screen relative ">
      {uiModal.isVisible ? (
        <div
          className="w-full h-full absolute flex tablet:place-center bg-tertiary/100 z-20"
          onClick={() => dispatch(closeModal())}
        >
          {uiModal.content === "login" ? <Login /> : null}
          {uiModal.content === "signup" ? <Signup /> : null}
          {uiModal.content === "addsub" ? <AddSub /> : null}
        </div>
      ) : null}
      <MobileNav
        displayMobileNav={displayMobileNav}
        setDisplayMobileNav={setDisplayMobileNav}
      />
      <Sidebar
        displayMobileNav={displayMobileNav}
        setDisplayMobileNav={setDisplayMobileNav}
      />
      <main className="flex-1 h-screen relative ">
        <Outlet />
      </main>
    </div>
  );
}
