import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import PageHeader from "../Layout/Header/PageHeader";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/useAuth";

export default function Feed() {
  const { id } = useParams();
  const { user } = useAuth();
  const subscription = useSelector((state) => state.subscription);
  const sub = subscription.find((sub) => sub._id === id);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  console.log("ITEM:", searchItem);

  useEffect(() => {
    console.log("ITEMS:", sub?.feed?.items);
    if (searchKeyword !== "") {
      const items = sub.feed.items.filter((item) => {
        const subTitle = item.title.toLowerCase();
        if (subTitle.includes(searchKeyword.toLowerCase())) {
          return item;
        }
      });
      setSearchItem(items);
    }
    return () => {
      setSearchItem([]);
    };
  }, [searchKeyword]);

  return (
    <div className="flex-1 flex flex-col bg-white w-full h-screen px-4 tablet:px-8 ">
      <PageHeader
        title={sub?.feed?.title}
        setSearchKeyword={setSearchKeyword}
      />
      <div
        className="h-full scrollBar overflow-y-scroll flex flex-col gap-y-10 pt-[calc(72px+88px)] tablet:pt-[calc(48px+60px)]"
        style={{ scrollbarWidth: "none" }}
      >
        {user && searchItem
          ? searchItem.map((post, index) => {
              return (
                <Post
                  post={post}
                  imgUrl={sub.feed?.image?.url}
                  link={sub.feed?.link}
                  feedTitle={sub.feed?.title}
                  key={index}
                />
              );
            })
          : null}
        {user && searchItem.length === 0 && sub
          ? sub.feed.items.map((post, index) => {
              return (
                <Post
                  post={post}
                  imgUrl={sub.feed?.image?.url}
                  link={sub.feed?.link}
                  feedTitle={sub.feed?.title}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
