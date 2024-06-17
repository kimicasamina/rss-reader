import React, { useEffect, useState } from "react";

// icons
import { XMarkIcon } from "../../assets/icons";
import { closeModal } from "../../redux/reducers/ui";

// library
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function AddSub() {
  // const [success, setSuccess] = useState(null);
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [sub, setSub] = useState(null);
  const [input, setInput] = useState({
    rssUrl: "",
    category: null,
  });

  const dispatch = useDispatch();
  const category = ["Tech", "Finance", "Entertainment"];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("ADD SUB");
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/subscription/addsub", {
        rss_url: input.rssUrl,
        category: input.category,
      });

      console.log("MESSAGE:", data.message);
      console.log("SUB:", data.newSub);
      setSub(data.newSub);
      toast.success(data.message);
    } catch (err) {
      console.log("ERR", err);
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
      dispatch(closeModal());
    }
  };

  if (isLoading) {
    return (
      <div className="bg-tertiary/60 backdrop-blur-lg absolute w-full h-full flex place-center">
        <h1 className="text-4xl">LOADING...</h1>
      </div>
    );
  }

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
            value={input.category}
            className="outline-none border p-2 rounded-md w-full "
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          >
            <option value="" className="">
              Select a Category
            </option>
            {category.map((option, index) => (
              <option className="" key={index}>
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
