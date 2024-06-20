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

  // useEffect(() => {
  //   async function fetchData() {
  //     if (user) {
  //       try {
  //         const { data } = await axios.get(`/api/user/${user._id}/subs`);
  //         console.log("DATA:", data.subs);
  //         dispatch(setSubs(data.subs));
  //       } catch (err) {
  //         console.log(err);
  //         toast.error(err.response?.data?.message);
  //         // setError(err.response.data.message);
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [user]);

  return (
    <div className="flex-1 flex flex-col ">
      <div
        className="w-full h-[100px] min-h-full flex-col overflow-y-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {user && subscription && subscription.length > 0
          ? subscription.map((sub, index) => {
              return (
                <Link
                  to={`/${sub._id}`}
                  state={{ id: sub._id }}
                  className={
                    "w-full flex items-center gap-x-2 cursor-pointer py-1 group "
                  }
                  key={index}
                >
                  {" "}
                  {sub?.feed?.image?.url ? (
                    <img src={sub.feed.image.url} alt="" className="w-5 h-5" />
                  ) : null}
                  <p className="group group-hover:text-gray-50 group-hover:ease-in-out group-hover:duration-200 ">
                    {sub?.feed?.title}
                  </p>
                </Link>
              );
            })
          : null}
      </div>
      {/* <div className="h-full scrollBar overflow-y-scroll ">
      </div> */}
    </div>
  );
}
