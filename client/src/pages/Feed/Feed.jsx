import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/useAuth";

export default function Feed() {
  const { id } = useParams();
  const { user } = useAuth();
  const subscription = useSelector((state) => state.subscription);
  const sub = subscription.find((sub) => sub._id === id);
  // console.log("sub", sub);

  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen px-4 tablet:px-8 ">
      <div
        className="h-full scrollBar overflow-y-scroll flex flex-col gap-y-10 pt-[calc(72px+88px)] tablet:pt-[calc(48px+60px)]"
        style={{ scrollbarWidth: "none" }}
      >
        {user && sub
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
