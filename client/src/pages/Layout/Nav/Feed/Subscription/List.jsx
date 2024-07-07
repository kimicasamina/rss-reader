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

export default function List({
  toggleEdit,
  selectedIds,
  setSelectedIds,
  searchKeyword,
}) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);
  const [searchItem, setSearchItem] = useState(null);
  const [selected, setSelected] = useState({
    checked: false,
    value: null,
  });
  console.log("SUBSCRIPTION:", subscription);

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

  useEffect(() => {
    if (searchKeyword !== "") {
      const item = subscription.filter((sub) => {
        const subTitle = sub.feed.title.toLowerCase();
        if (subTitle.includes(searchKeyword.toLowerCase())) {
          return sub;
        }
      });
      setSearchItem(item);
    }

    return () => {
      setSearchItem([]);
    };
  }, [searchKeyword]);

  return (
    <div className="flex-1 flex flex-col ">
      <div
        className="w-full h-[100px] min-h-full flex-col overflow-y-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {user && searchItem && searchItem.length > 0
          ? searchItem.map((sub, index) => {
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

        {user && searchItem?.length === 0 && subscription.length > 0
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
                  <p className="text-neutral-20">{sub?.feed?.title}</p>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
