import React, { useEffect } from "react";
import { FolderIcon } from "../../../../../assets/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../context/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setSubs } from "../../../../../redux/reducers/subscription";
import axios from "axios";
export default function List() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);
  console.log("SUBS:", subscription);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        try {
          const { data } = await axios.get(`/api/user/${user._id}/subs`);
          console.log("DATA:", data.user.subscription);
          dispatch(setSubs(data.user.subscription));
        } catch (err) {
          console.log(err);
          // toast.error(err.response?.data?.message);
          // setError(err.response.data.message);
        }
      }
    }
    fetchData();
  }, [user]);

  return (
    <div className="flex-1">
      {subscription && subscription.length > 0
        ? subscription.map((sub, index) => {
            return (
              <div
                className={
                  "w-full flex items-center gap-x-2 cursor-pointer py-1 group h-10"
                }
                key={sub._id}
              >
                {" "}
                {sub.image_url ? (
                  <img src={sub.image_url} alt="" className="w-5 h-5" />
                ) : null}
                {/* <FolderIcon
                  className={
                    "w-5 h-5 group-hover:text-gray-50 group-hover:ease-in-out group-hover:duration-200 "
                  }
                /> */}
                <p className="group group-hover:text-gray-50 group-hover:ease-in-out group-hover:duration-200 ">
                  {sub?.title}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
}
