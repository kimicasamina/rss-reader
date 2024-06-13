import React from "react";

import { AddFolderIcon, EditIcon } from "../../../assets/icons";

import FeedMenu from "./FeedMenu";
import List from "./Subscription/List";

export default function Feed() {
  return (
    <div className="relative h-full flex flex-col bg-transparent">
      <FeedMenu />
      <List />
      <div className="flex justify-self-end justify-between ">
        <AddFolderIcon
          className={
            "cursor-pointer hover:text-secondary hover:ease-in-out group-hover:duration-200 h-5 "
          }
        />
        <EditIcon
          className={
            "cursor-pointer hover:text-secondary hover:ease-in-out group-hover:duration-200 h-5 "
          }
        />
      </div>
    </div>
  );
}
