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
    </div>
  );
}
