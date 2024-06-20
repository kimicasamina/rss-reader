import React, { useEffect, useState } from "react";
// icons
import { AddIcon } from "../../assets/icons";

// library
import axios from "axios";
// redux
import { useSelector } from "react-redux";
// rrd
import { useParams } from "react-router-dom";
// components
import Post from "../Feed/Post";
import { useAuth } from "../../context/useAuth";

const sortFeed = (feed) => {
  return feed
    .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))
    .slice(0, 300);
};

const formatFeed = (arr) => {
  let list = [];
  for (let j = 0; j < arr.length; j++) {
    let items = arr[j].feed.items;
    // console.log("items:", items?.length);
    for (let k = 0; k < items?.length; k++) {
      console.log("item:", items[k]);
      let newItem = {
        feed_title: arr[j].feed.title,
        feed_link: arr[j].feed.link,
        feed_image: arr[j].feed?.image?.url,
        ...items[k],
      };
      list.push(newItem);
    }
  }
  const sortedFeed = sortFeed(list);
  return sortedFeed;
};

export default function Home() {
  const { id } = useParams();
  const { user } = useAuth();
  const subs = useSelector((state) => state.subscription);
  const feed = formatFeed(subs);

  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen px-4 tablet:px-8 ">
      <div
        className="h-full scrollBar overflow-y-scroll flex flex-col gap-y-10 pt-[calc(72px+88px)] tablet:pt-[calc(48px+60px)]"
        style={{ scrollbarWidth: "none" }}
      >
        {user && subs && feed
          ? feed.map((item, i) => {
              return (
                <Post
                  post={item}
                  imgUrl={item.feed_image}
                  link={item.feed_link}
                  feedTitle={item.feed_title}
                  key={i}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
