import React, { useState } from "react";

import { AddFolderIcon, EditIcon } from "../../../../assets/icons";
import {
  CheckboxBlankIcon,
  CheckboxLineIcon,
  TrashIcon,
} from "../../../../assets/icons";
import axios from "axios";
import FeedMenu from "./FeedMenu";
import List from "./Subscription/List";
import tailwindConfig from "../../../../../tailwind.config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteSub } from "../../../../../../api/controller/subscriptionController";
import { setSubs } from "../../../../redux/reducers/subscription";

export default function Feed() {
  const subs = useSelector((state) => state.subscription);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();

  const handleToggleEdit = (e) => {
    console.log(e.target);
    setToggleEdit(!toggleEdit);
  };

  const handleDelete = async () => {
    console.log("items to be deleted", selectedIds);

    const deleteItem = async (id) => {
      try {
        const { data } = await axios.delete(`/api/subscription/${id}/delete`);
        console.log("DATA:", data);
      } catch (err) {
        console.log(err);
      }
    };

    selectedIds.forEach((id) => {
      deleteItem(id);
    });

    const newItems = subs.filter((sub) => {
      if (!selectedIds.includes(sub._id)) {
        return sub;
      }
    });
    console.log("NEW ITEMS:", newItems);
    dispatch(setSubs(newItems));
    toast.success("Successfully deleted item");
    setToggleEdit(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-transparent">
      <FeedMenu setSearchKeyword={setSearchKeyword} />
      <div className="flex justify-start items-center pb-2">
        {toggleEdit ? (
          <button
            className=" bg-primary/50 w-full p-1"
            onClick={(e) => handleDelete(e)}
          >
            <TrashIcon className={"w-5 h-5 text-neutral-5"} />
          </button>
        ) : null}
      </div>
      <List
        toggleEdit={toggleEdit}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        searchKeyword={searchKeyword}
      />
      <div className="flex justify-self-center justify-between pt-2">
        <AddFolderIcon
          className={
            "cursor-pointer hover:text-neutral-20 hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
          }
        />
        <button className="" onClick={(e) => handleToggleEdit(e)}>
          <EditIcon
            className={
              "cursor-pointer hover:text-neutral-20 hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
            }
          />
        </button>
      </div>
    </div>
  );
}
