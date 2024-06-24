import React, { useState } from "react";

// icons
import { XMarkIcon } from "../../assets/icons";
import { closeModal } from "../../redux/reducers/ui";

// library
import axios from "axios";
import toast from "react-hot-toast";

// hooks and context
import { useAuth } from "../../context/useAuth";

// redux
import { useDispatch } from "react-redux";
import { addSub } from "../../redux/reducers/subscription";

// components
import Loading from "../Spinner/Loading";

export default function Post() {
  const [input, setInput] = useState({
    rssUrl: "",
    category: "",
  });
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(null);

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("ADD SUB");

    setIsLoading(true);

    try {
      const { data } = await axios.put(`/api/user/${user._id}/addsub`, {
        rss_url: input.rssUrl,
        category: input.category,
      });

      console.log("DATA:", data);
      console.log("NEWSUB:", data.newSub);
      dispatch(addSub(data.newSub));
      toast.success(data.message);
    } catch (err) {
      console.log("ERR", err);
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
      dispatch(closeModal());
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="bg-white p-8 rounded-md tablet:shadow-lg shadow-gray-20 flex flex-col gap-y-8 w-full tablet:max-w-screen-tablet z-20 relative"
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

        {/* <div className="flex flex-col">
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
        </div> */}

        <button
          type="submit "
          className="mt-4 w-full tablet:btn btn self-center bg-gray-20 text-white hover:bg-gray-5"
        >
          Add Feed
        </button>
      </form>
    </div>
  );
}
