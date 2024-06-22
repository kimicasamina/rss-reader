import React, { useEffect, useState } from "react";
import {
  RestartIcon,
  AddIcon,
  SearchIcon,
  AdjustmentIcon,
} from "../../../assets/icons";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/reducers/ui";
import { setSubs, updateSubs } from "../../../redux/reducers/subscription";
import axios from "axios";
import { useAuth } from "../../../context/useAuth";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function PageHeader() {
  const { id } = useParams();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(null);

  const handleAddSub = () => {
    console.log("ADD SUB");
    dispatch(setModal({ isVisible: true, content: "addsub" }));
  };

  const handleFetchLatest = async (e) => {
    console.log("FETCH SUB");
    let url = id
      ? `/api/subscription/${id}/latestsub`
      : `/api/user/${user._id}/latestsubs`;
    try {
      console.log("SUBS ID:", url);
      setIsLoading(true);
      const { data } = await axios.put(url);
      console.log("DATA:", data);
      dispatch(updateSubs(data.newSub));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col tablet:flex-row items-start justify-between tablet:items-center gap-y-1 py-2 absolute bg-tertiary/50 backdrop-blur-lg left-0 right-0 top-12 tablet:top-0 px-4 tablet:px-8">
      <div className="flex flex-row gap-y-2">
        <div className="flex flex-wrap items-center gap-x-2">
          <h1 className="text-black ">Refresh</h1>
          <button className="" onClick={(e) => handleFetchLatest(e)}>
            {isLoading ? (
              // <p>Loading...</p>
              <RestartIcon
                className={
                  "cursor-pointer hover:text-secondary animate-spin delay-200 duration-700"
                }
              />
            ) : (
              <RestartIcon className={"cursor-pointer hover:text-secondary"} />
            )}
          </button>
          <p className="text-sm tablet:text-base w-full opacity-70 ">
            Latest from your feeds.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="flex items-center gap-x-2 cursor-pointer">
          <SearchIcon className={`w-5 h-5`} />
          Search
        </button>
        <button className="flex items-center gap-x-2 cursor-pointer">
          <AdjustmentIcon className={`w-5 h-5`} />
          Filter
        </button>
        <button
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={(e) => handleAddSub(e)}
        >
          <AddIcon className={`w-5 h-5`} />
          Add Feed
        </button>
      </div>
    </div>
  );
}
