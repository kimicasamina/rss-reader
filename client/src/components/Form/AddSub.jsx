import React, { useEffect, useState } from "react";

import axios from "axios";

import { XMarkIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducers/ui";

export default function AddSub() {
  const [input, setInput] = useState({
    rssUrl: "",
    category: "",
  });

  const dispatch = useDispatch();
  const category = ["Tech", "Finance", "Entertainment"];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    // console.log("Add sub");
    // await axios
    //   .get(
    //     "https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss",
    //     {
    //       withCredentials: false,
    //       headers: { Accept: "application/json" },
    //     }
    //   )
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const url = `https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss`;
    const options = {
      method: "GET",
      mode: "no-cors",
    };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    console.log("hello");
    return json;
  };

  return (
    <div
      className="bg-white p-8 rounded-md tablet:shadow-lg shadow-gray-80 flex flex-col gap-y-8 w-full tablet:max-w-screen-tablet z-20 relative"
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
        className="flex flex-col gap-y-4"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div>
          <label htmlFor="">Add URL</label>
          <input
            type="text"
            name="rssUrl"
            placeholder={`E.g. https://news.ycombinator.com/rss `}
            className="w-full outline-none border p-2 rounded-md"
            onChange={(e) => setInput({ ...input, rssUrl: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name="category"
            className="outline-none border p-2 rounded-md w-full "
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          >
            <option value="" className="">
              Select a Category
            </option>
            {category.map((option, index) => (
              <option value="" className="" key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit "
          className="mt-4 w-full tablet:btn btn bg-primary text-tertiary self-center"
        >
          Add Feed
        </button>
      </form>
    </div>
  );
}
