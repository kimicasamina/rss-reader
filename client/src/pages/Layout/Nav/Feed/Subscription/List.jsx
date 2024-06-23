<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    name: "TechCrunch",
    url: "www.com",
    category: "Technology",
  },
  {
    id: 2,
    name: "The Next Web",
    url: "www.com",
    category: "Technology",
  },
  {
    id: 3,
    name: "Finance Times",
    url: "www.com",
    category: "Finance",
  },
  {
    id: 4,
    name: "The Economist",
    url: "www.com",
    category: "Economy",
  },
];
export default function List() {
  return (
    <div className="flex-1">
      {list && list.length > 0
        ? list.map((item, index) => {
            return (
              // <div className="flex items-center py-1" key={index}>
              // </div>
              <Link
                className={
                  "w-full flex items-center gap-x-2 cursor-pointer py-1"
                }
                key={index}
              >
                <span className="w-5 h-5 rounded-full bg-primary"></span>
                <p className="hover:text-gray-50">{item.name}</p>
              </Link>
            );
          })
        : null}
=======
import React, { useEffect, useState } from "react";
import {
  FolderIcon,
  CheckboxBlankIcon,
  CheckboxLineIcon,
} from "../../../../../assets/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../context/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setSubs } from "../../../../../redux/reducers/subscription";
import axios from "axios";

export default function List({ toggleEdit, selectedIds, setSelectedIds }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);
  const [selected, setSelected] = useState({
    checked: false,
    value: null,
  });

  const checkboxHandler = (e) => {
    setSelected({
      checked: e.target.checked,
      value: e.target.value,
    });
  };

  useEffect(() => {
    if (selected.checked) {
      setSelectedIds([...selectedIds, selected.value]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== selected.value));
    }
  }, [selected]);

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
                  {toggleEdit ? (
                    <input
                      type="checkbox"
                      value={sub._id}
                      checked={selectedIds.includes(sub._id)}
                      onChange={(e) => checkboxHandler(e)}
                    />
                  ) : null}
                  <img src={sub?.feed?.image?.url} alt="" className="w-5 h-5" />
                  <p className="">{sub?.feed?.title}</p>
                </Link>
              );
            })
          : null}
      </div>
>>>>>>> deletefeed
    </div>
  );
}
